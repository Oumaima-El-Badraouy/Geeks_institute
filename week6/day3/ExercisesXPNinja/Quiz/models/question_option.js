// server/models/QuestionOption.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Question = require('./question.js');
const Option = require('./option.js');

const QuestionOption = sequelize.define('questions_options', {
  question_id: {
    type: DataTypes.INTEGER,
    references: { model: Question, key: 'id' },
    allowNull: false
  },
  option_id: {
    type: DataTypes.INTEGER,
    references: { model: Option, key: 'id' },
    allowNull: false
  }
}, {
  tableName: 'questions_options',
  timestamps: false
});

// Associations (many-to-many)
Question.belongsToMany(Option, { through: QuestionOption, foreignKey: 'question_id', as: 'options' });
Option.belongsToMany(Question, { through: QuestionOption, foreignKey: 'option_id', as: 'questions' });

module.exports = QuestionOption;
