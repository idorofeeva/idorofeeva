const { Users } = require('../models');
const { News } = require('../models');
const OK = 200;
const BAD_REQUEST = 400;


module.exports = {
  list(req, res) {
    return Users
      .findAll({
        order: [['id']],
        include: [
          {
            model: News,
            as: 'news',
          },
        ],
      })
      .then(users => res.status(OK).send(users))
      .catch(error => res.status(BAD_REQUEST).send(error));
  },
  findUser(req, res) {
    return Users
      .findByPk(req.params.id, {
        include: [
          {
            model: News,
            as: 'news',
          },
        ],
      })
      .then(user => res.status(OK).send(user))
      .catch(error => res.status(BAD_REQUEST).send(error));
  },
  updateUser(req, res) {
    return Users
      .findByPk(req.params.id, {
        include: [
          {
            model: News,
            as: 'news',
          },
        ],
      })
      .then(user => {
        const { file } = req;

        if (req.file) {
          user.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            image: `/images/${file.originalname}`,
          })
            .then(user => res.status(OK).send(user))
            .catch(error => res.status(BAD_REQUEST).send(error));
        } else {
          user.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            image: req.body.image,
          })
            .then(user => res.status(OK).send(user))
            .catch(error => res.status(BAD_REQUEST).send(error));
        }
      })
      .catch(error => res.status(BAD_REQUEST).send(error));
  },

};
