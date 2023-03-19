const { BlogPost, Category, PostCategory, sequelize } = require('../models');
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

module.exports = {
  insert,
};
