const express = require("express")
const categoryController = require("../controller/categoryController")
const authenticate = require("../middleware/authenticate")
const admin = require("../middleware/admin")
const router = express.Router()

router.get("/category",categoryController.category)
router.get("/category/:categoryId/morph?",categoryController.getMorphsByCategory) //อาจจะเป็นแค่ /:categoryId เฉยๆ 
// router.get("/morph/:morph",categoryController.morph)


router.post("/category/addCategory",authenticate,admin,categoryController.addCategory)
router.post("/category/updateCategory/:categoryId",authenticate,admin,categoryController.updateCategory)
router.delete("/category/deleteCategory/:categoryId",authenticate,admin,categoryController.deleteCategory)
module.exports = router