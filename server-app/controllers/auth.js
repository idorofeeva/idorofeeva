const jwt = require('jsonwebtoken');
const passport = require('passport');
const { Users } = require('../models');
const { News } = require('../models');

require('../config/passport')(passport);

const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;

const tokenVal = 86400;
const tokenVal2 = 30;

const img = 'images/';
const JWT = 'JWT ';

module.exports = {
  signUp(req, res) {
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password || !req.file) {
      res.status(BAD_REQUEST).send({ msg: 'Please pass user information.' });
    } else {
      Users
        .findOne({ where: { email: req.body.email } })
        .then(email => {
          if (email) {
            res.status(UNAUTHORIZED).send({ message: 'Registration failed. Email address already in use.' });
          } else {
            const { file } = req;

            Users
              .create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                image: img + file.originalname,
              })
              .then(user => {
                const token = jwt.sign(
                  JSON.parse(JSON.stringify(user)),
                  'nodeauthsecret', { expiresIn: tokenVal * tokenVal2 }
                );

                jwt.verify(token, 'nodeauthsecret', (err, data) => {
                  console.log(err, data);
                });
                res.json({
                  success: true,
                  token: JWT + token,
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  image: user.image,
                  news: [],
                });
              });
          }
        })
        .catch(error => {
          res.status(BAD_REQUEST).send(error);
        });
    }
  },
  signIn(req, res) {
    Users
      .findOne({
        where: { email: req.body.email },
        include: [
          {
            model: News,
            as: 'news',
          },
        ],
      })
      .then(user => {
        if (!user) {
          return res.status(UNAUTHORIZED).send({ message: 'Authentication failed. User not found.' });
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            const token = jwt.sign(
              JSON.parse(JSON.stringify(user)),
              'nodeauthsecret', { expiresIn: tokenVal * tokenVal2 }
            );

            jwt.verify(token, 'nodeauthsecret', (error, data) => {
              console.log(error, data);
            });
            res.json({
              success: true,
              token: JWT + token,
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              image: user.image,
              news: user.news,
            });
          } else {
            res.status(UNAUTHORIZED).send({ success: false, msg: 'Authentication failed. Wrong password.' });
          }
        });
      })
      .catch(error => res.status(BAD_REQUEST).send(error));
  },
  getAuthUser(req, res) {
    if (req.user) {
      Users
        .findOne({
          where: { id: req.user.id },
          include: [
            {
              model: News,
              as: 'news',
            },
          ],
        })
        .then(user => {
          const token = jwt.sign(
            JSON.parse(JSON.stringify(user)),
            'nodeauthsecret', { expiresIn: tokenVal * tokenVal2 }
          );

          jwt.verify(token, 'nodeauthsecret', (err, data) => {
            console.log(err, data);
          });
          res.json({
            success: true,
            token: JWT + token,
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image,
            news: user.news,
          });
        });
    }
  },
};
