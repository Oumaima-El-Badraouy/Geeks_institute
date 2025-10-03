const Question = require('../models/question.js');

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la récupération des questions' });
  }
};
module.exports = { getQuestions };
