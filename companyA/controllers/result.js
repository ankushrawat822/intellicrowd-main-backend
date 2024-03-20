const resultTaskA = require("../models/result")

const getAllResultItems = async (req, res) => {
    try {
      const items = await resultTaskA.find()
      res.json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  // g
  const submitTask = async (req, res) => {
    try {
      //const items = await resultTaskA.aggregate()
      const item = new resultTaskA(req.body);
      await item.save();
      res.json(item);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  module.exports = {getAllResultItems , submitTask}