const express = require("express")
const orderController = require("../controller/orderController")
const authenticate = require("../middleware/authenticate")
const admin = require("../middleware/admin")
const router = express.Router()

router.get("/order",authenticate,admin,orderController.order)
router.post("/addOrder",authenticate,orderController.addOrder)

module.exports = router