/* eslint-disable new-cap */

'use strict';

const TEXTCHAR = 20000;
const IMGCHAR = 1500;

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('News', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    text: {
      allowNull: false,
      type: Sequelize.STRING(TEXTCHAR),
    },
    tags: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image: { type: Sequelize.STRING(IMGCHAR) },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('News'),
};
