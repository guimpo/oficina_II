module.exports = (sequelize, DataTypes) => {
  var Documento = sequelize.define("Documento", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      tableName: "Documento"
    }
  )

  Documento.associate = function (models) {
    Documento.belongsTo(models.Aluno, {foreignKey: "alunoId"})
    Documento.belongsTo(models.Item, { foreignKey: "itemId" })
  }

  return Documento
}