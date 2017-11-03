var bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
  var Usuario = sequelize.define("Usuario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
    }, {
      tableName: "Usuario"
    }
  )
    Usuario.hook('beforeCreate', (user) => {
      const salt = bcrypt.genSaltSync()
      user.password = bcrypt.hashSync(user.password, salt)
    })

    Usuario.isPassword = function(encodedPassword, password) {
      return bcrypt.compareSync(password, encodedPassword);
    }

    return Usuario
}