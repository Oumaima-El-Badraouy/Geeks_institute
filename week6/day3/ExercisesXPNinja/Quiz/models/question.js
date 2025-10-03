const db = require('../config/database');
const Option = require('./option');

const Question = {
  findAll: async () => {
    const rows = await db('questions')
      .leftJoin('questions_options', 'questions.id', 'questions_options.question_id')
      .leftJoin('options', 'questions_options.option_id', 'options.id')
      .select(
        'questions.id as questionId',
        'questions.question as questionText',
        'questions.correctAnswer as correctAnswer',
        'options.id as optionId',
        'options.optionText'
      );

    const questionsMap = {};
    rows.forEach(row => {
      if (!questionsMap[row.questionId]) {
        questionsMap[row.questionId] = {
          id: row.questionId,
          question: row.questionText,
          correctAnswer: row.correctAnswer,
          options: []
        };
      }
      if (row.optionId) {
        questionsMap[row.questionId].options.push({
          id: row.optionId,
          optionText: row.optionText
        });
      }
    });

    return Object.values(questionsMap);
  },

  create: async (questionText, correctAnswerId, optionTexts = []) => {
    const [questionId] = await db('questions')
      .insert({ question: questionText, correctAnswer: correctAnswerId })
      .returning('id');

    const options = [];
    for (const text of optionTexts) {
      const [option] = await Option.create(text);
      await db('questions_options').insert({
        question_id: questionId.id || questionId,
        option_id: option.id || option
      });
      options.push(option);
    }

    return { id: questionId.id || questionId, question: questionText, options };
  }
};
module.exports = Question;
