const Fetchtask = require("../models/fetchTask")

const getAllItems = async (req, res) => {
    try {
      const items = await Fetchtask.find()
      res.json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  // get randomo 1 task
  const getRandomTask = async (req, res) => {
    try {
      const items = await Fetchtask.aggregate([
        {
            $match: {
               isAnnotate : false
            }
          },
        {
          $sample: {
            size: 1
          }
        }
      ])
      res.json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal Server Error , can not get random doc' });
    }
  };


  // modifying isAnnotate field in fetchTask collection
  const modifyIsAnnotate = async (req , res) =>{
    const taskId = req.params.id;

    try {
      // Find the task by ID
      const task = await Fetchtask.findById(taskId);
  
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      // Update the isAnnotate field
      task.isAnnotate = req.body.isAnnotate;
  
      // Save the updated task
      await task.save();
  
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  module.exports = {getAllItems , getRandomTask , modifyIsAnnotate}