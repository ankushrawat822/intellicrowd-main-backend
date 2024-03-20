const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
    tweet : String,
    isAnnotate : Boolean,
    isOffensive : Boolean
   
  });
  
const resultTaskA = mongoose.model('resultTaskA', resultSchema)

module.exports = resultTaskA