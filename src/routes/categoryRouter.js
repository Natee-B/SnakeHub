const express = require("express")
const categoryController = require("../controller/categoryController")
const authenticate = require("../middleware/authenticate")
const admin = require("../middleware/admin")
const snakeController = require("../controller/snakeController")
const morphController = require("../controller/morphController")
const uploadMiddleware = require("../middleware/uploadMiddleware")
const router = express.Router()

router.get("/category",categoryController.category)
router.get("/category/getAllSnake",categoryController.getAllSnake)
router.get("/category/getAllMorph",categoryController.getAllMorph) //อาจจะเป็นแค่ /:categoryId เฉยๆ 
router.get("/category/:categoryId/:morphId",categoryController.getMorphsByCategory) //อาจจะเป็นแค่ /:categoryId เฉยๆ 
// router.get("/morph/:morph",categoryController.morph)

router.post("/category/addSnake",authenticate,admin,uploadMiddleware.single('img'),snakeController.addSnake) //cloudinary 
router.patch("/category/updateSnake/:snakeId",authenticate,admin,uploadMiddleware.single('img'),snakeController.updateSnake) //cloudinary 
router.delete("/category/deleteSnake/:snakeId",authenticate,admin,snakeController.deleteSnake)

router.post("/category/addMorph",authenticate,admin,morphController.addMorph)
router.patch("/category/updateMorph/:morphId",authenticate,admin,morphController.updateMorph)
router.delete("/category/deleteMorph/:morphId",authenticate,admin,morphController.deleteMorph)

router.post("/category/addCategory",authenticate,admin,uploadMiddleware.single('img'),categoryController.addCategory)
router.patch("/category/updateCategory/:categoryId",authenticate,admin,uploadMiddleware.single('img'),categoryController.updateCategory)
router.delete("/category/deleteCategory/:categoryId",authenticate,admin,categoryController.deleteCategory)
module.exports = router