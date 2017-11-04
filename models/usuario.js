var bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
  var Usuario = sequelize.define("Usuario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    },
    papel: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    }
    }, {
      tableName: "Usuario"
    }
  )

  Usuario.associate = function (models) {
    // 
  }

  Usuario.hook('beforeCreate', (usuario) => {
    const salt = bcrypt.genSaltSync()
    usuario.senha = bcrypt.hashSync(usuario.senha, salt)
  })

  Usuario.isPassword = function(encodedPassword, password) {
    return bcrypt.compareSync(password, encodedPassword);
  }

  return Usuario
}