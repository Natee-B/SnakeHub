const categoryService = require("../service/categoryService");
const createError = require("../util/createError");
const authService = require("../service/authService");
const cloudinary = require("../config/cloudinary");
const categoryController = {};

categoryController.category = async (req, res, next) => {
  try {
    const category = await categoryService.category();
    res.json({ category });
  } catch (err) {
    next(err);
  }
};

categoryController.getAllMorph = async (req, res, next) => {
  try {
    const data = await categoryService.getAllMorph();
    res.json({data});
  } catch (err) {
    next(err);
  }
};
categoryController.getMorphsByCategory = async (req, res, next) => {
  try {
    const { categoryId,morphId } = req.params;
    const data = await categoryService.getMorphsByCategory(categoryId,morphId);
    res.json({data});
  } catch (err) {
    next(err);
  }
};

categoryController.getAllSnake = async (req, res, next) => {
  try {
    const AllSnake = await categoryService.getAllSnake();
    res.json({ AllSnake });
  } catch (err) {
    next(err);
  }
};

categoryController.addCategory = async (req, res, next) => {
  try {
    const { speciesName, description} = req.body;
    const body = {speciesName, description}
    const file = req.file;
    let img
    if(file){
      const uploadResult  = await cloudinary.uploader.upload(file.path)
      img = uploadResult.secure_url;
    }else {
      img = null; 
    }
    const addCategory = await categoryService.addCategory(
      body,
      img
    );

    res.json({ message: "Add Category Successful!",addCategory });
  } catch (err) {
    next(err);
  }
};

categoryController. updateCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const { speciesName, description} = req.body;
    const file = req.file;
    let img
    if(file){
      const uploadResult  = await cloudinary.uploader.upload(file.path)
      img = uploadResult.secure_url;
    }else {
      img = null; 
    }
    const updateCategory = await categoryService.updateCategory(categoryId,speciesName, description, img);
    res.json({ message: "Update Successful!", updateCategory });
  } catch (err) {
    next(err);
  }
};


categoryController.deleteCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    // const admin = await authService.isAdmin(userId); //เปลี่ยนจาก service ไปที่ middleware แล้ว
    // if (!admin) {
    //   return createError(400, "Only Admin can add category");
    // }
    const deleteCategory = await categoryService.deleteCategory(categoryId);
    res.json({ message: "Deleted Successful!", deleteCategory });
  } catch (err) {
    next(err);
  }
};

module.exports = categoryController;
