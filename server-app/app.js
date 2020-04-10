const createError = require('http-errors');

const express = require('express');

const path = require('path');

const passport = require('passport');
const session = require('express-session');

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

const logger = require('morgan');

const { Users } = require('./models');

const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;


require('./config/googleAuth');

const usersRouter = require('./routes/users');

const newsRouter = require('./routes/news');

const authRouter = require('./routes/auth');
const cors = require('cors');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug', 'ejs');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept, Authorization');
  next();
});

app.use(cors({ origin: '*' }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
  try {
    const user = await Users.findByPk(id);


    done(null, user);
  } catch (e) {
    done(e);
  }
});

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter);
app.use('/auth', authRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'), err => {
    if (err) {
      res.status(INTERNAL_SERVER_ERROR).send(err);
    }
  });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(NOT_FOUND));
});

// Error handler
app.use((err, req, res) => {
  const { message: mes } = err;

  res.locals.message = mes;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || INTERNAL_SERVER_ERROR);
  res.render('error');
});

module.exports = app;
