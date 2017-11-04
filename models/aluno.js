module.exports = (sequelize, DataTypes) => {
  var Aluno = sequelize.define("Aluno", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    curso: {
      type: DataTypes.STRING
    }
    }, {
      tableName: "Aluno"
    }
  )

  Aluno.associate = function (models) {
    Aluno.belongsTo(models.Usuario, { foreignKey: "usuarioId"})
  }

  return Aluno
}