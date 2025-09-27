let current = 0, score = 0;
let questions = [];

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next');
const scoreEl = document.getElementById('score');

async function fetchQuestions() {
  const res = await fetch('/api/questions');
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.text;
    btn.onclick = () => selectAnswer(opt.text, q.correctAnswer);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(answer, correctAnswer) {
  if (answer === correctAnswer) score++;
  current++;
  if (current < questions.length) showQuestion();
  else showScore();
}

function showScore() {
  questionEl.textContent = 'Quiz Finished!';
  optionsEl.innerHTML = '';
  scoreEl.textContent = `Your score: ${score}/${questions.length}`;
}

fetchQuestions();
