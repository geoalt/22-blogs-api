module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: DataTypes.STRING,
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRRING,
    },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    }
  );

  return User;
};
