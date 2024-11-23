const express = require("express")
const orderController = require("../controller/orderController")
const authenticate = require("../middleware/authenticate")
const admin = require("../middleware/admin")
const uploadMiddleware = require("../middleware/uploadMiddleware")
const router = express.Router()

router.get("/order",authenticate,orderController.order)
router.patch("/updateOrder/:orderId",authenticate,admin,orderController.updateOrder)
router.post("/addOrder",authenticate,uploadMiddleware.single('img'),orderController.addOrder)
router.delete("/deleteOrder/:orderId",authenticate,admin,orderController.deleteOrder)

module.exports = router