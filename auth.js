var passport = require("passport")
var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require("passport-jwt").ExtractJwt

module.exports = app => {
  var Usuario = app.db.models.Usuario;
  var cfg = app.libs.config;
  var params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  };
  var strategy = new JwtStrategy(params, (payload, done) => {
    console.log(payload);
    Usuario.findById(payload.id)
      .then(usuario => {
        if (usuario) {
          return done(null, {
            id: usuario.id,
            email: usuario.email
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