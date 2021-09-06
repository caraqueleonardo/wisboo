const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('preguntas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true,
      unique:true
    },

    question_type: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    text:{
      type: DataTypes.TEXT,
      allowNull: false,
    },

    options:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  });
};
