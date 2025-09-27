const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/database');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', quizRoutes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => console.log('Server running at http://localhost:5000'));
});
