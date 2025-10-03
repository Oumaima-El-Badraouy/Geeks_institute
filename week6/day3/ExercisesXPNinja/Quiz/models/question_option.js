const db = require('../config/database');

const QuestionOption = {
  link: (questionId, optionId) =>
    db('questions_options').insert({ question_id: questionId, option_id: optionId }),
};

module.exports = QuestionOption;
