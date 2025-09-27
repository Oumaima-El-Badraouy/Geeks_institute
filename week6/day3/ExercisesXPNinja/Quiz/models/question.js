const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Question = sequelize.define('question', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  question: { type: DataTypes.STRING, allowNull: false },
  correctAnswer: { type: DataTypes.STRING, allowNull: false }
}, { tableName: 'questions' });

module.exports = Question;
