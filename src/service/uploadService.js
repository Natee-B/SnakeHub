const cloudinary = require("../config/cloudinary");
// cloudinary.cloudinary_js_config หรือต้องใช้อันนี้
const prisma = require("../config/prisma");

const uploadService ={}

// uploadService.upload=async(filePath)=>
//     await cloudinary.uploader.upload(filePath);

uploadService.dataBase=async(image,body)=>
   await prisma.ชื่อตาราง.create({
        data: {
            test1: body.test1,
            test2: body.test2,
            img: image.secure_url,
          //publicId: result.public_id,
          //imageUrl: result.secure_url,
        },
      });

module.exports = uploadService
