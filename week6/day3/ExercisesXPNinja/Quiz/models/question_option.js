const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');
const Question = require('./question.js');
const Option = require('./option.js');

const QuestionOption = sequelize.define('question_option', {
  questionId: { type: DataTypes.INTEGER, references: { model: Question, key: 'id' } },
  optionId: { type: DataTypes.INTEGER, references: { model: Option, key: 'id' } }
}, { tableName: 'questions_options', timestamps: false });

Question.belongsToMany(Option, { through: QuestionOption, foreignKey: 'questionId' });
Option.belongsToMany(Question, { through: QuestionOption, foreignKey: 'optionId' });

module.exports = QuestionOption;
