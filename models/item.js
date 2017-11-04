module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define("Item", {
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
      tableName: "Item"
    }
  )

  Item.associate = function (models) {
    Item.belongsTo(models.Grupo, { foreignKey: "grupoId" })
  }

  return Item
}