'use strict';

const bcrypt = require('bcrypt-nodejs');
const BCRYPTVAL = 10;

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://www.w3schools.com/howto/img_avatar.png',
    },
  }, {});


  Users.beforeSave(user => {
    if (user.changed('password')) {
      // eslint-disable-next-line no-sync
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(BCRYPTVAL), null);
    }
  });
  Users.prototype.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, (err, isMatch) => {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };
  Users.associate = function(models) {
    Users.hasMany(models.News, {
      foreignKey: 'userId',
      as: 'news',
    });
  };

  return Users;
};
