const homeService = require("../service/homeService");
const homeController = {};

homeController.homePage = async (req, res, next) => {
  try {
    const dataHome = await homeService.homepage();
    res.json({ dataHome });
  } catch (err) {
    next(err);
  }
};

module.exports = homeController;
