var bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
    }, {
      tableName: "Users"
    }
  )

    Users.associate = function(models) {
      
    }

    Users.hook('beforeCreate', (user) => {
      const salt = bcrypt.genSaltSync()
      user.password = bcrypt.hashSync(user.password, salt)
    })

    Users.isPassword = function(encodedPassword, password) {
      return bcrypt.compareSync(password, encodedPassword);
    }
  
    
    return Users
}