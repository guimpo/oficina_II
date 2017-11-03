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
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
    }, {
      tableName: "Usuario"
    }
  )

  Usuario.associate = function (models) {
    Usuario.hasOne(models.Professor, { foreignKey: "usuarioId"})
  }

  Usuario.hook('beforeCreate', (user) => {
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(user.password, salt)
  })

  Usuario.isPassword = function(encodedPassword, password) {
    return bcrypt.compareSync(password, encodedPassword);
  }

  return Usuario
}