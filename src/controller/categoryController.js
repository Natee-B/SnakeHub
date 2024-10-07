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

categoryController.getMorphsByCategory = async (req, res, next) => {
  try {
    console.log("111111");
    const { categoryId } = req.params;
    const { morph } = req.query;
    const selectCategory = await categoryService.getMorphsByCategory(
      categoryId,
      morph
    );

    res.json({ selectCategory });
  } catch (err) {
    next(err);
  }
};

categoryController.morph = async (req, res, next) => {
  try {
    const product = await categoryService.morph();

    res.json({ product });
  } catch (err) {
    next(err);
  }
};

categoryController.addCategory = async (req, res, next) => {
  try {
    const { speciesName, description, img, userId } = req.body;

    const addCategory = await categoryService.addCategory({
      speciesName,
      description,
      img,
      userId: Number(userId),
    });

    res.json({ addCategory });
  } catch (err) {
    next(err);
  }
};

categoryController. updateCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const { speciesName, description, img, userId } = req.body;

    const updateCategory = await categoryService.updateCategory(categoryId,speciesName, description, img, userId);
    res.json({ message: "Update Done", updateCategory });
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
    res.json({ message: "Deleted", deleteCategory });
  } catch (err) {
    next(err);
  }
};

module.exports = categoryController;
