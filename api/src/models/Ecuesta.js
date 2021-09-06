const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('encuesta', {
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true,
      unique:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
};
