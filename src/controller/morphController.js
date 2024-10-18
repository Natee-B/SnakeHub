const morphService = require("../service/morphService")

const morphController = {}

morphController.addMorph =async(req, res, next)=>{
    try{
        const{ name,categoryId} = req.body
        await morphService.addMorph(name,categoryId)
        res.json({message: "AddMorph Successful"})
    }catch(err){
        next(err)
    }
}
morphController.updateMorph =async(req, res, next)=>{
    try{
        const{ name,categoryId } = req.body
        const{morphId} = req.params
        await morphService.updateMorph(name,categoryId,morphId)
        res.json({message: "UpdateMorph Successful"})
    }catch(err){
        next(err)
    }
}
morphController.deleteMorph =async(req, res, next)=>{
    try{
        const{morphId} = req.params
        await morphService.deleteMorph(morphId)
        res.json({message: "DeleteMorph Successful"})
    }catch(err){
        next(err)
    }
}

module.exports = morphController