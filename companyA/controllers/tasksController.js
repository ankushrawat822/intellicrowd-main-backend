// In controllers/defaultTasksController.js
const Task = require('../models/Tasks');

exports.createDefaultTask = async (req, res) => {
  try {
    const newDefaultTask = new Task(req.body);
    const savedDefaultTask = await newDefaultTask.save();
    res.status(201).json(savedDefaultTask);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating default task' });
  }
};


// 