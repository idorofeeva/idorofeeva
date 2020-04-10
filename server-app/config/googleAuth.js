const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { Users } = require('../models');

passport.use(new GoogleStrategy(
  {
    clientID: '190890910017-q56998ibpb07f1fehpvl875bs2dcv4cq.apps.googleusercontent.com',
    clientSecret: 'OYEuc9fMSjxHUXdk7czqobH7',
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    Users
      .findOne({ where: { email: profile.emails[0].value } })
      .then(user => {
        if (user) {
          done(null, user);
        } else {
          Users
            .create({
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              image: profile.photos[0].value,
            })
            .then(user => {
              done(null, user);
            });
        }
      });
  }
));

module.exports = passport;
