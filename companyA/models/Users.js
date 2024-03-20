const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//available datatypes -> bool ,Array
const UserSchema = new Schema(
  {
    email:{
      type:String,
      required: true
    },
    // password:{
    //   type:String,
    //   // required:true
    // },
    fullname:{
      type:String,
      
    },
    phoneNo:{
      type:String,
      
    },
    age : {
        type : Number,
         
    },
    region :{
        type : String,
        
    },
    tasks: [
      {
          name : {
             type : String,
             
          },
          earnedMoney: {
              type: Number,
              default : 0,
              required: true,
              
          },
          spamScore: {
              type: Number,
              default: 0
          },
          isBanned: {
              type: Boolean,
              default: false
          },
          exerciseDone :{
            type : Boolean,
            default : false
          }
         
      }
  ]
  }
)
//          collectionname, schema , export name
module.exports = mongoose.model('Users', UserSchema , 'Users')