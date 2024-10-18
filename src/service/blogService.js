const prisma = require("../config/prisma")
const blogService = {}

blogService.getAllBlog = async ()=>
   await prisma.post.findMany()


blogService.Content = async (id)=>
   await prisma.post.findFirst({
    where:{ id : parseInt(id,10)}
   })


blogService.addBlog = async (title ,content ,img ,userId)=>
   await prisma.post.create({
    data:{ title ,content ,img ,userId : parseInt(userId,10) }
   })


blogService.updateBlog = async (blogId,title ,content ,img ,userId)=>
   await prisma.post.update({
      where:{ id : parseInt(blogId,10) },
    data:{ title ,content ,img ,userId : parseInt(userId,10) }
   })


blogService.deleteBlog = async (id)=>
   await prisma.post.delete({
      where:{ id : parseInt(id,10)}
     })
  


module.exports = blogService