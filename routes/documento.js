var multer = require('multer')
var path = require('path')
var fs = require('fs')


var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./imagens");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

var upload = multer({ storage: Storage }).array("imgUploader", 3); //Field name and max count

module.exports = app => {
  const Documento = app.db.models.Documento
  const Usuario = app.db.models.Usuario
  
  app.route("/Documento")
    .all(app.auth.authenticate())
    .delete((req, res) => {
      Documento.destroy({ where: { id: req.documento.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })

  app.route("/Documento/:id")
    // .all(app.auth.authenticate())
    .get((req, res) => {
      Documento.findOne({
        where: {
          id: req.params.id,
        }
      })
      .then(result => {
          var caminho = process.cwd()
          var c = caminho + '/imagens/'
          console.log("\n")
          console.log(c)
          var d = path.join(c,result.url)
          res.download(d)
        })
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
    })
    
  
  app.route("/Documento/all")
    // .all(app.auth.authenticate())
    .get((req, res) => {
      Documento.findAll({
        include: [{all: true, nested: true}]
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
  
  app.post("/Documentos/upload", (req, res) => {
    upload(req, res, function (err) {
      if (err) {
        return res.end("Something went wrong!");
      }
      return res.end("File uploaded sucessfully!.");
    });
  })

  app.post("/Documentos", (req, res) => {
    upload(req, res, function (err) {
      if (err) {
        return res.end("Something went wrong!");
      }
      return res.end("File uploaded sucessfully!.");
    });



    // Documento.create(req.body)
    //   .then(result => res.json(result))
    //   .catch(error => {
    //     res.status(412).json({ msg: error.message })
    //   })
  })
}