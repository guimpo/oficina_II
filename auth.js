var passport = require("passport")
var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require("passport-jwt").ExtractJwt

module.exports = app => {
  var Users = app.db.models.Users;
  var cfg = app.libs.config;
  var params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  };
  var strategy = new JwtStrategy(params, (payload, done) => {
    console.log(payload);
    console.log("aqui")
    Users.findById(payload.id)
      .then(user => {
        if (user) {
          return done(null, {
            id: user.id,
            email: user.email
          });
        }
        return done(null, false);
      })
      .catch(error => done(error, null));
  });
  passport.use(strategy);
  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};