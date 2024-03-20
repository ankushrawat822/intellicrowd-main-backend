const mongoose = require("mongoose")

const fetchtaskSchema = new mongoose.Schema({
    tweet : String,
    isAnnotate : Boolean,
    isOffensive : Boolean
  });
  
const Fetchtask = mongoose.model('Fetchtask', fetchtaskSchema)

module.exports = Fetchtask



  