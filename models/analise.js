module.exports = (sequelize, DataTypes) => {
  var Analise = sequelize.define("Analise", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    resultado: {
      type: DataTypes.STRING
    },
    comentario: {
      type: DataTypes.STRING
    }
  }, {
      tableName: "Analise"
    }
  )

  Analise.associate = function (models) {
    Analise.belongsTo(models.Documento, { foreignKey: "documentoId" })
    Analise.belongsTo(models.Professor, { foreignKey: "professorId" })
  }

  return Analise
}