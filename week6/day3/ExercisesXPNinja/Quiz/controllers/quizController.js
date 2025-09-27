const Question = require('../models/question.js');
const Option = require('../models/option.js');

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [{ model: Option, through: { attributes: [] } }]
    });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getQuestions };
