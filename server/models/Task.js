// Require mongoose
const mongoose = require('mongoose');

// Implement schema for a task
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false }
});

// Export the model as 'Task'
module.exports = mongoose.model('Task', TaskSchema);
