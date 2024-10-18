const blogService = require("../service/blogService")
const blogController = {}

blogController.allBlog=async(req,res,next)=>{
    try{
       const allBlog = await blogService.getAllBlog()
    //    console.log("allBlog",allBlog)
       res.json({allBlog})
    }catch(err){
        next(err)
    }
}

blogController.Content=async(req,res,next)=>{
    try{
        const { blogId } = req.params
        const Content = await blogService.Content(blogId)           
        res.json(Content)
    }catch(err){
        next(err)
    }
}

blogController.addBlog=async(req,res,next)=>{
    try{
        const {title ,content ,img ,userId} = req.body
        const addBlog = await blogService.addBlog(title ,content ,img ,userId) 
        res.json({message: "Blog added successfully!~"})
    }catch(err){
        next(err)
    }
}
blogController.updateBlog=async(req,res,next)=>{
    try{
        const { blogId } = req.params
        const {title ,content ,img ,userId} = req.body
        const updateBlog = await blogService.updateBlog(blogId,title ,content ,img ,userId)
        res.json(updateBlog)
    }catch(err){
        next(err)
    }
}

blogController.deleteBlog=async(req,res,next)=>{
    try{
        const { blogId } = req.params
        const deleteBlog = await blogService.deleteBlog(blogId)           
        res.json(deleteBlog)
    }catch(err){
        next(err)
    }
}

module.exports = blogController