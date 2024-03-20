const express = require("express")
const app = express()

const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8080


// importing routes
const getAllItems = require("./companyA/routes/fetchTask")
// const getAllItems = require("./companyA")
const getRandomTask = require("./companyA/routes/fetchTask")

const getAllResultItems = require("./companyA/routes/fetchTask")
const submitTask = require("./companyA/routes/fetchTask")
const modifyIsAnnotate = require("./companyA/routes/fetchTask")

const Signup = require("./companyA/routes/userAuth")
const Login = require("./companyA/routes/userAuth")

const createDefaultTask = require("./companyA/routes/tasks")
const  {getCurrentUserByEmail, updateTaskExerciseDone, increaseTaskEarnMoney}  = require("./companyA/controllers/userController")
const increaseTaskSpamScore = require("./companyA/routes/tasks")
const reduceTaskSpamScore = require("./companyA/routes/tasks")
const { banUserForSubmitBtnSpamming } = require("./companyA/controllers/spamScoreController")


// import { Webhook } from "svix";
const  {Webhook}  = require('svix');
// import bodyParser from "body-parser";

// middelwares
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(cookieParser());


// clerk start

// app.post(
//     "/api/webhooks",
//     bodyParser.raw({ type: "application/json" }),
//     async function (req, res) {
//        try {
        
//          const userData = req.body
//          console.log(req.body)
         
//          console.log(req.body.data.email_addresses[0].email_address)
    
//          res.status(200).json({
//              success : true,
//              message : "webhook received"
//          })
        
//        } catch (error) {

//         res.status(400).json({
//             success : false,
//             message : "webhook not  received"
//         })
        
//        }
//     })


// clerk ends



// mounting routes
// /all
app.use("/api" , getAllItems)
// /random
app.use("/api" , getRandomTask)
// / all result
app.use("/api" , getAllResultItems)
// /random
app.use("/api" , submitTask)
// modify isAnnotate field
app.use("/api" , modifyIsAnnotate)

//auth
app.use("/api", Signup)
app.use("/api", Login)
app.use("/api" , getCurrentUserByEmail)
// create tasks in Tasks collection
app.use("/api" , createDefaultTask )
// update tasks "exerciseDone"
app.use("/api" , updateTaskExerciseDone)

// spam score increase 
app.use("/api-spam" , increaseTaskSpamScore)
// spam score reduce 
app.use("/api-spam" , reduceTaskSpamScore)
// earn money
app.use("/api-earn" , increaseTaskEarnMoney)
// ban user for spamming submit btn
app.use("/api-ban" , banUserForSubmitBtnSpamming)


mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            app.listen(PORT , ()=>{
                console.log(`server is running on port ${PORT} , connected to ${process.env.MONGO_URL}`)
            })
        }).catch(err=> console.log(err))
