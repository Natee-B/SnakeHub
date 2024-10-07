const express = require("express")
const authController = require("../controller/authController")
const router = express.Router()

router.post("/auth/register",authController.Register)
router.post("/auth/login",authController.Login)
// router.post("/forgotPassword",authController.forgotPass)

module.exports = router