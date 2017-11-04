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
    },
    pontos: {
      type: DataTypes.INTEGER
    },
    resultado: {
      type: DataTypes.STRING
    },
    comentario: {
      type: DataTypes.STRING
    }
  }, {
      tableName: "Documento"
    }
  )

  Documento.associate = function (models) {
    Documento.belongsTo(models.Usuario, {foreignKey: "alunoId"})
    Documento.belongsTo(models.Usuario, { foreignKey: "professorId" })
    Documento.belongsTo(models.Item, { foreignKey: "itemId" })
  }

  return Documento
}