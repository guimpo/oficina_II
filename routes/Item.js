module.exports = app => {
  const Item = app.db.models.Item
  const Usuario = app.db.models.Usuario
  
  app.route("/Item")
    .all(app.auth.authenticate())
    .get((req, res) => {
      Item.findById(req.item.id, {
        attributes: ["id", "nome", "email"]
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
    .delete((req, res) => {
      Item.destroy({ where: { id: req.item.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
  app.post("/Itens", (req, res) => {
    Item.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
  })
}