// server/models/Question.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Question = sequelize.define('question', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  question: { type: DataTypes.TEXT, allowNull: false },
  correctAnswerId: { type: DataTypes.INTEGER, allowNull: true } // stores option.id of correct answer
}, {
  tableName: 'questions',
  timestamps: true
});

module.exports = Question;
