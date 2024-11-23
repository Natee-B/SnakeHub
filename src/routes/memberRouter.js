const express = require("express")
const memberController = require("../controller/memberController")
const authenticate = require("../middleware/authenticate")
const admin = require("../middleware/admin")

const router = express.Router()

router.get("/member/getMember/",authenticate,memberController.getMember)
router.post("/member/updateMember/:userId",authenticate,memberController.updateMember)
router.delete("/member/deleteMember/:userId",authenticate,admin,memberController.deleteMember)

module.exports = router