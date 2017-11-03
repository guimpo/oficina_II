module.exports = (sequelize, DataTypes) => {
  var Professor = sequelize.define("Professor", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    siap: {
      type: DataTypes.STRING
    }
    }, {
      tableName: "Professor"
    }
  )
  Professor.associate = function (models) {
    Professor.belongsTo(models.Usuario, {foreignKey: "usuarioId"})
  }
   
  return Professor
}