module.exports = (err,req,res,next)=>{
    console.log("Error middle ware :",err)
    res.status(err.statusCode || 500).json({message : err.message})
}

