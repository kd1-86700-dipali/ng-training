const express = require('express');
const router = express.Router();
const Task = require('../model/Task');

router.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post('/api/task', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

router.put('/api/task/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

router.delete('/api/task/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;