const Task = require('../models/Task');

async function getTasks(req, res) {
  const tasks = await Task.find();
  res.json(tasks);
}


async function addTask(req, res) {
  const task = await Task.create({ title: req.body.title });
  res.json(task);
}

async function toggleTask(req, res) {
  const task = await Task.findById(req.params.id);
  task.done = !task.done;
  await task.save();
  res.json(task);
}


async function deleteTask(req, res) {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}


module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
};
