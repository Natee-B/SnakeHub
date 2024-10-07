const express = require("express")
const blogController = require("../controller/blogController")
const admin = require("../middleware/admin")
const authenticate = require("../middleware/authenticate")
const router = express.Router()

router.get("/blog",blogController.allBlog)
router.get("/blog/:blogId",blogController.Content)

router.post("/blog/addBlog",authenticate,admin,blogController.addBlog)
router.patch("/blog/updateBlog/:blogId",authenticate,admin,blogController.updateBlog)
router.delete("/blog/deleteBlog/:blogId",authenticate,admin,blogController.deleteBlog)

module.exports = router