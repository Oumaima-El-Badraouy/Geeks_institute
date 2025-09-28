const express = require('express');
const router=express.Router();
router.get('/users/:id', async (req, res) => {
try {
const users = await readUsers();
const user = users.find(u => u.id === req.params.id);
if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé.' });
const safe = { ...user, password: undefined };
res.json(safe);
} catch (err) {
console.error('Get user error:', err);
res.status(500).json({ message: 'Erreur lecture utilisateur.' });
}
});

router.put('/users/:id', async (req, res) => {
try {
const { name, lastName, email, username, password } = req.body;
const users = await readUsers();
const idx = users.findIndex(u => u.id === req.params.id);
if (idx === -1) return res.status(404).json({ message: 'Utilisateur non trouvé.' });

if (username) {
const other = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.id !== req.params.id);
if (other) return res.status(409).json({ message: 'Le nom d\'utilisateur est déjà pris par un autre utilisateur.' });
users[idx].username = username;
}
if (email) {
const other = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.id !== req.params.id);
if (other) return res.status(409).json({ message: 'L\'email est déjà utilisé par un autre utilisateur.' });
users[idx].email = email;
}
if (name) users[idx].name = name;
if (lastName) users[idx].lastName = lastName;
if (password) users[idx].password = await bcrypt.hash(password, SALT_ROUNDS);
users[idx].updatedAt = new Date().toISOString();
await writeUsers(users);
const safe = { ...users[idx], password: undefined };
res.json({ message: 'Utilisateur mis à jour.', user: safe });
} catch (err) {
console.error('Update user error:', err);
res.status(500).json({ message: 'Erreur mise à jour.' });
}
});

module.exports = router;