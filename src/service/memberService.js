const prisma = require("../config/prisma")

const memberService = {}

memberService.getMember= async()=>
    await prisma.user.findMany()

memberService.updateMember= async(role,userId,body)=>
    await prisma.user.update({
        where:{id: parseInt(userId,10)},
        data: { role, ...body }
    })

memberService.deleteMember = async(userId)=>
    await prisma.user.delete({
        where:{id: parseInt(userId,10)}
    })

module.exports = memberService