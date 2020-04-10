const express = require('express');
const router = new express.Router();
const usersController = require('../controllers/users');

const multer = require('multer');

const store = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: store }).single('file');

/* GET news listing. */
router.get('/', usersController.list);
router.get('/:id', usersController.findUser);
router.put('/:id', upload, usersController.updateUser);

module.exports = router;
