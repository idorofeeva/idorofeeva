'use strict';

module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    tags: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.NUMBER,
  }, {});


  News.associate = function(models) {
    News.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'author',
    });
  };

  return News;
};
