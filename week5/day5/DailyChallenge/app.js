// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse JSON body
app.use(express.static(path.join(__dirname, 'public'))); // sert les fichiers statiques (public/)

// données en mémoire (exemple)
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "😂", name: "Laugh" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "😍", name: "HeartEyes" },
  { emoji: "🤔", name: "Thinking" }
];

let leaderboard = []; // tableau d'objets { player, score }

// utilitaire shuffle
function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

// GET /game -> renvoie un emoji aléatoire + options (3)
app.get('/game', (req, res) => {
  const correctIndex = Math.floor(Math.random() * emojis.length);
  const correct = emojis[correctIndex];

  // construire options (1 correcte + 2 distractors)
  const names = [correct.name];
  while (names.length < 3) {
    const cand = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!names.includes(cand)) names.push(cand);
  }

  const options = shuffle(names);
  // NOTE: On n'envoie pas la bonne réponse côté client (pour éviter le cheat),
  // mais pour un jeu simple on peut l'envoyer si tu veux. Ici on l'envoie pas.
  res.json({
    emoji: correct.emoji,
    options // tableau de noms (strings)
  });
});

// POST /submit -> envoie { player, score } pour mise à jour du leaderboard
app.post('/submit', (req, res) => {
  const { player, score } = req.body;
  if (!player || typeof score !== 'number') {
    return res.status(400).json({ success: false, message: 'player et score requis' });
  }

  leaderboard.push({ player, score });
  leaderboard = leaderboard
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // garder top 10

  res.json({ success: true, leaderboard });
});

// GET /leaderboard -> récupérer leaderboard
app.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

// démarre le serveur
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
