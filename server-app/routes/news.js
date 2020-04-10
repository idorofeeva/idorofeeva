const express = require('express');
const router = new express.Router();
const newsController = require('../controllers/news');

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
router.get('/', newsController.list);
router.post('/', upload, newsController.add);

module.exports = router;
