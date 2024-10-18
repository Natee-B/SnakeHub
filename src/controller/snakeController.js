const snakeService = require("../service/snakeService")

const snakeController = {}

snakeController.addSnake = async(req, res, next)=>{
    try{
        const {description,price,birthdate,age,feed,img,categoryId,morphId} = req.body
        const data = {
            description,
            price: parseInt(price,10),
            birthdate: new Date(birthdate).toISOString(),
            age :parseInt(age,10),
            feed,
            img,
            categoryId : parseInt(categoryId,10),
            morphId: parseInt(morphId,10)
        }
        await snakeService.addSnake(data)
        res.json({message: "AddSnake Successful"})
    }catch(err){
        next(err)
    }
}
snakeController.updateSnake=async(req, res, next)=>{
    try{
        const {description,price,birthdate,age,feed,img,categoryId,morphId} = req.body
        const{snakeId} = req.params
        const data = {
            description,
            price: parseInt(price,10),
            birthdate: new Date(birthdate).toISOString(),
            age :parseInt(age,10),
            feed,
            img,
            categoryId : parseInt(categoryId,10),
            morphId: parseInt(morphId,10)
        }
        await snakeService.updateSnake(data,snakeId)
        res.json({message: "UpdateSnake Successful"})
    }catch(err){
        next(err)
    }
}
snakeController.deleteSnake=async(req, res, next)=>{
    try{
        const{snakeId} = req.params
        await snakeService.deleteSnake(snakeId)
        res.json({message: "DeleteSnake Successful"})
    }catch(err){
        next(err) 
    }
}

module.exports = snakeController
