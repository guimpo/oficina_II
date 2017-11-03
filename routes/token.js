var jwt = require("jwt-simple")

module.exports = app => {
  const cfg = app.libs.config
  const Usuario = app.db.models.Usuario
  app.post("/token", (req, res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email
      const password = req.body.password
      Usuario.findOne({ where: { email: email } })
        .then(user => {
          if (Usuario.isPassword(user.password, password)) {
            const payload = { id: user.id }
            res.json({
              token: jwt.encode(payload, cfg.jwtSecret)
            });
          } else {
            res.sendStatus(401)
          }
        })
        .catch(error => res.sendStatus(401))
    } else {
      res.sendStatus(401);
    }
  })
}