const { BlogPost, Category, PostCategory, User, sequelize } = require('../models');
const { verifyToken } = require('../auth/auth');

const doesThatCategoriesExist = async (categories) => 
Promise.all(categories.map(async (id) => Category.findByPk(id)));

const postCategoriesInsertions = async (post, categories, t) => {
  await Promise.all(categories
    .map(async (id) => PostCategory
      .create({ postId: post.id, categoryId: id }, { transaction: t })));
};

const insert = async (req) => {
  const { authorization: token } = req.headers;
  const { categoryIds: categories } = req.body;

  const checkedCategories = await doesThatCategoriesExist(categories);

  if (checkedCategories.includes(null)) {
    return { status: 400, payload: { message: 'one or more "categoryIds" not found' } };
  }

  const user = verifyToken(token);
  const post = { ...req.body, userId: user.id };

  const result = await sequelize.transaction(async (t) => {
    const blogpost = await BlogPost.create(post, { transaction: t });
    await postCategoriesInsertions(blogpost, categories, t);

    return blogpost;
  });

  return { status: 201, payload: result.dataValues };
};

const findAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      { 
        model: User, 
        as: 'user', 
        attributes: { exclude: 'password' }, 
      },
      { 
        model: Category, 
        as: 'categories', 
        through: PostCategory,
      },
    ],
  });
  
  return { status: 200, payload: result };
};

const findOne = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [
      { 
        model: User, 
        as: 'user', 
        attributes: { exclude: 'password' }, 
      },
      { 
        model: Category, 
        as: 'categories', 
        through: PostCategory,
      },
    ],
  });

  if (!result) {
    return { status: 404, payload: { message: 'Post does not exist' } };
  }

  return { status: 200, payload: result };
};

module.exports = {
  insert,
  findAll,
  findOne,
};
