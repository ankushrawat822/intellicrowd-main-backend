const express = require("express")
const router = express.Router()

const {getAllItems , getRandomTask , modifyIsAnnotate} = require("../controllers/fetchTask")
const {getAllResultItems , submitTask} = require("../controllers/result")




router.get("/all" , getAllItems)
router.get("/random" , getRandomTask)

router.get("/result" , getAllResultItems)
router.post("/submit" , submitTask)

router.patch("/task/:id" , modifyIsAnnotate)

module.exports = router