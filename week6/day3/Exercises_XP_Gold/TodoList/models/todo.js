const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');

const Todo = sequelize.define('todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  
}, {
  tableName: 'todos',
  timestamps: false
});

module.exports = Todo;
