const express = require('express');
const router = express.Router();
const { getTasks, getTask, UpdateTask, DeleteTask, CreateTask } = require('../controllers/task.controller.js');

router.post('/tasks', CreateTask);
router.delete('/tasks/:id', DeleteTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.put('/tasks/:id', UpdateTask);

module.exports = router;
