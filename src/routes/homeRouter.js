const express = require("express")
const homeController = require("../controller/้homeController")
const router = express.Router()

router.get("/home",homeController.homePage)

module.exports = router