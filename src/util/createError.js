const createError = (statusCode,message)=>{
    const err = new Error(message)
    err.statusCode = statusCode
    throw err
}
module.exports = createError