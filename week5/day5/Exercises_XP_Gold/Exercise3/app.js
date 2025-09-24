const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());
app.use(cors());
let todos = [];
app.post('/api/todos', async (req, res) => {
  try {
    const { title, completed } = req.body;
    const newTodo = { id: uuidv4(), title, completed: completed || false };
    todos.push(newTodo);
    res.json(newTodo);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
app.get('/api/todos', async (req, res) => {
  try {
    res.json(todos);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
app.get('/api/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const todo = todos.find(t => t.id === id);
    if (!todo) {
      return res.status(404).json({ message: 'todo undefined' });
    }
    res.json(todo);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
app.put('/api/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { title, completed } = req.body;
    const todo = todos.find(t => t.id === id);

    if (!todo) {
      return res.status(404).json({ message: 'todo undefined' });
    }

    todo.title = title !== undefined ? title : todo.title;
    todo.completed = completed !== undefined ? completed : todo.completed;

    res.json(todo);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
app.delete('/api/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const exists = todos.find(t => t.id === id);

    if (!exists) {
      return res.status(404).json({ message: 'todo undefined' });
    }

    todos = todos.filter(t => t.id !== id);
    res.json({ message: 'todo deleted', todos });
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(5000, () => {
  console.log('server running at http://localhost:5000/');
});
