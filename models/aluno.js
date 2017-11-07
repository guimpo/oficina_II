var bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
  var Aluno = sequelize.define("Aluno", {
    ra: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    curso: {
      type: DataTypes.STRING,
      unique: true
    }
    }, {
      tableName: "Aluno"
    }
  )

  Aluno.associate = function (models) {
    // 
  }

  Aluno.hook('beforeCreate', (aluno) => {
    // const salt = bcrypt.genSaltSync()
    // aluno.senha = bcrypt.hashSync(aluno.senha, salt)
  })

  Aluno.isPassword = function(encodedPassword, password) {
    // return bcrypt.compareSync(password, encodedPassword);
  }

  return Aluno
}