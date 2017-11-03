var bodyParser = require("body-parser")
var express = require("express")
var cors = require("cors")
var compression = require("compression")

module.exports = app => {
  app.set("port", 3000);
  app.set("json spaces", 4)
  app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }))
  app.use(compression())
  app.use(bodyParser.json())
  app.use(app.auth.initialize())
  app.use((req, res, next) => {
    console.log("middleware")
    console.log(req.body)
    delete req.body.id
    next();
  })
  app.use(express.static("public"))
}
