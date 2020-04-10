const express = require('express');
const router = new express.Router();
const authController = require('../controllers/auth');
const passport = require('passport');

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

router.post('/signup', upload, authController.signUp);
router.post('/signin', authController.signIn);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    debugger;
    res.redirect('http://localhost:3000/');
  }
);

router.get('/getAuthUser', authController.getAuthUser);

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

module.exports = router;
