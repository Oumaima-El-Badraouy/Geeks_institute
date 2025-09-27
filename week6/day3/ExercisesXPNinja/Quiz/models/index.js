const Question = require('./question');
const Option = require('./option');
const QuestionOption = require('./question_option');

// Many-to-Many avec alias UNIQUE
Question.belongsToMany(Option, {
  through: QuestionOption,
  foreignKey: 'question_id',
  otherKey: 'option_id',
  as: 'optionsForQuestion' // <- ici, alias unique
});

Option.belongsToMany(Question, {
  through: QuestionOption,
  foreignKey: 'option_id',
  otherKey: 'question_id',
  as: 'questionsForOption' // <- autre alias unique
});

module.exports = { Question, Option, QuestionOption };
