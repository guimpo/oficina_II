var fs = require("fs")
var path = require("path")
var Sequelize = require("sequelize")

var db = null

module.exports = app => {
  if (!db) {
    var config = app.libs.config;
    var sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )
    db = {
      sequelize,
      Sequelize,
      models: {}
    }
    var dir = path.join(__dirname, "models")
    fs.readdirSync(dir).forEach(file => {
      var modelDir = path.join(dir, file)
      var model = sequelize.import(modelDir)
      db.models[model.name] = model
    })
    Object.keys(db.models).forEach(key => {
      db.models[key].associate(db.models)
    })
  }
  return db;
}