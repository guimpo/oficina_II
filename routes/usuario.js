module.exports = app => {
  const Usuario = app.db.models.Usuario
  
  app.route("/Usuario")
    .all(app.auth.authenticate())
    .get((req, res) => {
      Usuario.findById(req.user.id, {
        attributes: ["id", "nome", "email"]
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
    .delete((req, res) => {
      Usuario.destroy({ where: { id: req.user.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
  app.post("/Usuario", (req, res) => {
    Usuario.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
  })
}