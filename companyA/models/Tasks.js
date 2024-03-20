// In models/DefaultTask.js
const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  earnedMoney: {
    type: Number,
    default: 0,
  },
  spamScore: {
    type: Number,
    default: 0,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
  exerciseDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Tasks', TasksSchema);
