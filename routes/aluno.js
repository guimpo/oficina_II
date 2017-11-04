module.exports = app => {
  const Aluno = app.db.models.Aluno
  const Usuario = app.db.models.Usuario
  
  app.route("/Aluno")
    .all(app.auth.authenticate())
    .get((req, res) => {
      Aluno.findById(req.aluno.id, {
        attributes: ["id", "nome", "email"]
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
    .delete((req, res) => {
      Aluno.destroy({ where: { id: req.aluno.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
  app.post("/Alunos", (req, res) => {
    Aluno.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
  })
}