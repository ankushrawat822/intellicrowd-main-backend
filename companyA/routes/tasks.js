const express = require("express")
const router = express.Router()

const {createDefaultTask} = require('../controllers/tasksController');
const { reduceTaskSpamScore, increaseTaskSpamScore, banUserForSubmitBtnSpamming } = require("../controllers/spamScoreController");
const { increaseTaskEarnMoney } = require("../controllers/userController");

// request for just creating a new task in "Tasks" model by postman. 
router.post("/task-create", createDefaultTask)


//  update spam score on Task A
router.patch('/reduce', reduceTaskSpamScore);
router.patch('/increase', increaseTaskSpamScore);
// update earn money
router.patch("/earn" , increaseTaskEarnMoney)
// ban user on spamming submit btn
router.patch("/submit-spam-user" , banUserForSubmitBtnSpamming)





module.exports = router