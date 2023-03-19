module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      tableName: 'post_categories',
      timestamps: false,
      underscored: true,
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'post_id',
      as: 'posts',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'category_id',
      as: 'categories',
    });
  };

  return PostCategory;
};
