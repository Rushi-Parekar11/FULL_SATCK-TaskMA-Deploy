const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskname: {
    type: String,
    required: true, 
  },
  isDone: {
    type: Boolean, 
    required: true,
  },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
