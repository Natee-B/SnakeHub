const memberService = require("../service/memberService")

const memberController = {}

memberController.getMember= async(req,res,next)=>{
    try{
        const data = await memberService.getMember()
        res.json({data})
    }catch(err){
        next(err)
    }
}
memberController.updateMember= async(req,res,next)=>{
    try{
        const {role,firstName,lastName,city,address1,address2,zipCode,phoneNumber} = req.body
        const body = {
            firstName,
            lastName,
            city,
            address1,
            address2,
            zipCode : parseInt(zipCode,10),
            phoneNumber : parseInt(phoneNumber,10)}
        const {userId} = req.params
        await memberService.updateMember(role,userId,body)
        res.json({message : "Role Update"})
    }catch(err){
        next(err)
    }
}

memberController.deleteMember= async(req,res,next)=>{
    try{
        const {userId} = req.params
        await memberService.deleteMember(userId)
        res.json({message : "User Delete"})
    }catch(err){
        next(err)
    }
}

module.exports = memberController