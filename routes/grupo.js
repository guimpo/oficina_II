module.exports = app => {
  const Grupo = app.db.models.Grupo
  const Usuario = app.db.models.Usuario
  
  app.route("/Grupo")
    .all(app.auth.authenticate())
    .get((req, res) => {
      Grupo.findById(req.grupo.id, {
        attributes: ["id", "nome", "email"]
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
    .delete((req, res) => {
      Grupo.destroy({ where: { id: req.grupo.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
  app.post("/Grupos", (req, res) => {
    Grupo.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
  })
}