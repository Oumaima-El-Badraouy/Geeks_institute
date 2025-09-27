// server/models/Option.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Option = sequelize.define('option', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  optionText: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'options',
  timestamps: true
});

module.exports = Option;
