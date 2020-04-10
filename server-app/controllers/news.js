const { News } = require('../models');
const { Users } = require('../models');

const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;


module.exports = {
  add(req, res) {
    if (!req.body.title || !req.body.text || !req.body.tags || !req.file) {
      res.status(BAD_REQUEST).send({ msg: 'Please pass post information.' });
    } else {
      const { file } = req;


      News
        .create({
          title: req.body.title,
          text: req.body.text,
          tags: req.body.tags,
          image: `/images/${file.originalname}`,
          userId: req.body.userId,
        })
        .then(news => res.status(CREATED).send(news))
        .catch(error => res.status(BAD_REQUEST).send(error));
    }
  },
  list(req, res) {
    return News
      .findAll({
        order: [['id']],
        include: [
          {
            model: Users,
            as: 'author',
          },
        ],
      })
      .then(news => res.status(OK).send(news))
      .catch(error => res.status(BAD_REQUEST).send(error));
  },
};
