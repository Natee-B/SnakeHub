const uploadController = {}
const uploadService = require('../service/uploadService');

uploadController.upload = async (req, res, next) => {
    try {
        const {test1,test2} = req.body
        const body = {test1,test2}
        const file = req.file; 

        const image = await uploadService.upload(file.buffer); //(file.buffer.toString('base64') อันไหน

        
        const data = await uploadService.dataBase(image,body)
        res.json({ data })
    } catch (err) {
        next(err)
    }
};

module.exports = uploadController

