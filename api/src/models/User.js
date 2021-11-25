
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    backsquat: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    pushpress: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }, 
    snatch: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    clean: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    running: { 
      type: DataTypes.STRING,
      defaultValue: 0
    },
    pullups: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING
    },
    isadmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isprofessor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isuser: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    paymentday:{
      type: DataTypes.DATE
    }
  });
};