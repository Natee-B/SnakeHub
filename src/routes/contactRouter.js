const express = require("express")
const contactController = require("../controller/contactController")
const router = express.Router()

router.get("/contact",contactController.contact)

module.exports = router