let questions = [];
let current = 0;
let score = 0;
let selectedOptionId = null;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const progressEl = document.getElementById('progress');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');
const finalEl = document.getElementById('final');
async function loadQuestions() {
  const res = await fetch('/api/questions');
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  resultEl.textContent = '';
  finalEl.textContent = '';
  nextBtn.style.display = 'none';
  submitBtn.style.display = 'inline-block';

  if (current >= questions.length) {
    questionEl.textContent = 'Quiz finished!';
    optionsEl.innerHTML = '';
    progressEl.textContent = '';
    finalEl.textContent = `Your score: ${score} / ${questions.length}`;
    submitBtn.style.display = 'none';
    return;
  }

  const q = questions[current];
  progressEl.textContent = `Question ${current + 1} / ${questions.length}`;

  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  selectedOptionId = null;

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt.optionText;
    btn.dataset.id = opt.id;
    btn.addEventListener('click', () => {
      // deselect others
      optionsEl.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedOptionId = parseInt(opt.id);
    });
    optionsEl.appendChild(btn);
  });
}

submitBtn.addEventListener('click', () => {
  if (selectedOptionId == null) {
    alert('Please select an answer first.');
    return;
  }

  const q = questions[current];
  // disable buttons
  optionsEl.querySelectorAll('.option').forEach(b => b.disabled = true);

  // show correct/wrong
  const correctId = q.correctAnswerId;
  if (selectedOptionId === correctId) {
    score++;
    resultEl.textContent = '✅ Correct!';
    resultEl.style.background = 'green';
  } else {
    resultEl.textContent = '❌ Wrong!';
    resultEl.style.background = 'red';
  }

  // color the option buttons
  optionsEl.querySelectorAll('.option').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if (id === correctId) btn.classList.add('correct');
    if (id === selectedOptionId && id !== correctId) btn.classList.add('wrong');
  });

  submitBtn.style.display = 'none';
  nextBtn.style.display = 'inline-block';
});

nextBtn.addEventListener('click', () => {
  current++;
  showQuestion();
});

// initial load
loadQuestions().catch(err => {
  questionEl.textContent = 'Failed to load questions';
  console.error(err);
});
