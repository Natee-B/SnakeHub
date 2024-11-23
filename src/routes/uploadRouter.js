const express = require("express")
const router = express.Router()
const uploadMiddleware = require("../middleware/uploadMiddleware");
const uploadController = require("../controller/uploadController");


router.post('/upload', uploadMiddleware.single('img'),uploadController.upload)

module.exports = router
