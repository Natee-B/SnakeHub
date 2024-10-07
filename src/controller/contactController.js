const contactService = require("../service/contactService")

const contactController = {}

contactController.contact = async(req,res,next) =>{
   try{
       const data = await contactService.contact()
       res.json(data)
   }catch(err){
    next(err)
   } 
}
module.exports = contactController