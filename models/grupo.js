module.exports = (sequelize, DataTypes) => {
  var Grupo = sequelize.define("Grupo", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.STRING
    }
  }, {
      tableName: "Grupo"
    }
  )

  Grupo.associate = function (models) {
    // Grupo.belongsTo(models.Usuario, { foreignKey: "usuarioId" })
  }

  return Grupo
}