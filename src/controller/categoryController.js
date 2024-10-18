const categoryService = require("../service/categoryService");
const createError = require("../util/createError");
const authService = require("../service/authService");
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
    const selectCategory = await categoryService.getMorphsByCategory(categoryId,morphId);
    res.json({selectCategory});
    
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
    const { speciesName, description, img} = req.body;

    const addCategory = await categoryService.addCategory({
      speciesName,
      description,
      img,
    });

    res.json({ message: "Add Category Successful!",addCategory });
  } catch (err) {
    next(err);
  }
};

categoryController. updateCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const { speciesName, description, img} = req.body;

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
