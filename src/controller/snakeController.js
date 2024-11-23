const cloudinary = require("../config/cloudinary");
const snakeService = require("../service/snakeService");

const snakeController = {};

snakeController.addSnake = async (req, res, next) => {
  try {
    const {
      description,
      price,
      birthdate,
      age,
      gender,
      feedingType,
      categoryId,
      morphId,
      recommend,
    } = req.body;
    const data = {
      description,
      price: parseInt(price, 10),
      birthdate: birthdate ? new Date(birthdate).toISOString() : null,
      age: parseInt(age, 10),
      gender,
      feedingType,
      categoryId: parseInt(categoryId, 10),
      morphId: parseInt(morphId, 10),
      recommend,
    };
    const file = req.file;
    let img;
    if (file) {
      const uploadResult = await cloudinary.uploader.upload(file.path);
      img = uploadResult.secure_url;
      data.img = img
    } else {
      img = null;
    }

    await snakeService.addSnake(data);
    res.json({ message: "AddSnake Successful" });
  } catch (err) {
    next(err);
  }
};
// snakeController.updateSnake=async(req, res, next)=>{
//     try{
//         const {description,price,birthdate,age,gender,feedingType,img,categoryId,morphId,recommend} = req.body
//         const{snakeId} = req.params
//         const data = {
//             description,
//             price: parseInt(price,10),
//             birthdate: birthdate ? new Date(birthdate).toISOString() : null,
//             age :parseInt(age,10),
//             gender,
//             feedingType,
//             img,
//             categoryId : parseInt(categoryId,10),
//             morphId: parseInt(morphId,10),
//             recommend,
//         }
//         await snakeService.updateSnake(data,snakeId)
//         res.json({message: "UpdateSnake Successful"})
//     }catch(err){
//         next(err)
//     }
// }

//ทำไมแบบนี้ได้ แต่แบบบน Error ส่งแค่ค่า recommend มาอย่างเดียว
snakeController.updateSnake = async (req, res, next) => {
  try {
    const { snakeId } = req.params;
    const {
      description,
      price,
      birthdate,
      age,
      gender,
      feedingType,
      categoryId,
      morphId,
      recommend,
    } = req.body;

    const data = {};
    if (description) data.description = description;
    if (price !== undefined) data.price = parseInt(price, 10);
    if (birthdate) data.birthdate = new Date(birthdate).toISOString();
    if (age !== undefined) data.age = parseInt(age, 10);
    if (gender) data.gender = gender;
    if (feedingType) data.feedingType = feedingType;
    if (categoryId !== undefined) data.categoryId = parseInt(categoryId, 10);
    if (morphId !== undefined) data.morphId = parseInt(morphId, 10);
    if (recommend !== undefined) data.recommend = recommend; // ตรวจสอบการตั้งค่า recommend

    const file = req.file;
    let img;
    if (file) {
      const uploadResult = await cloudinary.uploader.upload(file.path);
      img = uploadResult.secure_url;
      data.img = img
    } else {
      img = null;
    }

    await snakeService.updateSnake(snakeId,data);
    res.json({ message: "UpdateSnake Successful" });
  } catch (err) {
    next(err);
  }
};

snakeController.deleteSnake = async (req, res, next) => {
  try {
    const { snakeId } = req.params;
    await snakeService.deleteSnake(snakeId);
    res.json({ message: "DeleteSnake Successful" });
  } catch (err) {
    next(err);
  }
};

module.exports = snakeController;
