const createError = require("../util/createError")

const admin = (req,res,next) =>{
    try{
        if(req.user.role !== "ADMIN"){
            return createError(403,"Forbidden(Not Admin)")
        }
        next()
    }catch(err){
        next(err)
    }
}

module.exports = admin