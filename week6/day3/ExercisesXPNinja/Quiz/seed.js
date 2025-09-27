// server/seed.js
const { sequelize } = require('./config/database');
const Question = require('./models/question.js');
const Option = require('./models/option.js');
const QuestionOption = require('./models/question_option.js');

async function seed() {
  try {
    await sequelize.sync({ force: true }); 
    const q1 = await Question.create({ question: 'What is the capital of France?' });
    const o1 = await Option.create({ optionText: 'Paris' });
    const o2 = await Option.create({ optionText: 'London' });
    const o3 = await Option.create({ optionText: 'Berlin' });
    const o4 = await Option.create({ optionText: 'Madrid' });
    await QuestionOption.bulkCreate([
      { question_id: q1.id, option_id: o1.id },
      { question_id: q1.id, option_id: o2.id },
      { question_id: q1.id, option_id: o3.id },
      { question_id: q1.id, option_id: o4.id },
    ]);
    await q1.update({ correctAnswerId: o1.id });

    // Question 2
    const q2 = await Question.create({ question: 'What is 2 + 2?' });
    const q2o1 = await Option.create({ optionText: '3' });
    const q2o2 = await Option.create({ optionText: '4' });
    const q2o3 = await Option.create({ optionText: '5' });
    const q2o4 = await Option.create({ optionText: '22' });

    await QuestionOption.bulkCreate([
      { question_id: q2.id, option_id: q2o1.id },
      { question_id: q2.id, option_id: q2o2.id },
      { question_id: q2.id, option_id: q2o3.id },
      { question_id: q2.id, option_id: q2o4.id },
    ]);
    await q2.update({ correctAnswerId: q2o2.id });

    // Question 3
    const q3 = await Question.create({ question: 'Which language runs in a web browser?' });
    const q3o1 = await Option.create({ optionText: 'Python' });
    const q3o2 = await Option.create({ optionText: 'Java' });
    const q3o3 = await Option.create({ optionText: 'C++' });
    const q3o4 = await Option.create({ optionText: 'JavaScript' });

    await QuestionOption.bulkCreate([
      { question_id: q3.id, option_id: q3o1.id },
      { question_id: q3.id, option_id: q3o2.id },
      { question_id: q3.id, option_id: q3o3.id },
      { question_id: q3.id, option_id: q3o4.id },
    ]);
    await q3.update({ correctAnswerId: q3o4.id });

    console.log('✅ Seed finished');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
