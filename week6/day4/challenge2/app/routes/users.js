const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

let users = [];
router.post("/register", async (req, res) => {
  try {
    const { name, lastName, email, username, password } = req.body;

    if (!name || !lastName || !email || !username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const existing = users.find(u => u.username === username || u.email === email);
    if (existing) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Date.now(),
      name,
      lastName,
      email,
      username,
      password: hashedPassword,
    };

    users.push(newUser);

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/", (req, res) => {
  res.json(users);
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName, email, username } = req.body;

  const userIndex = users.findIndex(u => u.id == id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    lastName: lastName || users[userIndex].lastName,
    email: email || users[userIndex].email,
    username: username || users[userIndex].username,
  };

  res.json({ message: "User updated", user: users[userIndex] });
});

module.exports = router;
