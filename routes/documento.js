module.exports = app => {
  const Documento = app.db.models.Documento
  const Usuario = app.db.models.Usuario
  
  app.route("/Documento")
    .all(app.auth.authenticate())
    .get((req, res) => {
      Documento.findById(req.documento.id, {
        attributes: ["id", "nome", "email"]
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
    .delete((req, res) => {
      Documento.destroy({ where: { id: req.documento.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
  
  app.route("/Documento/Analise")
    .get((req, res) => {
      Documento.findAll({
        include: [{all: true}]
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
  
  app.post("/Documentos", (req, res) => {
    Documento.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
  })
}