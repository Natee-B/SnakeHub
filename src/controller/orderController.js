const orderService = require("../service/orderService");

const orderController = {};

orderController.order = async (req, res, next) => {
  try {
    const data = await orderService.order();
    res.json({data})
  } catch (err) {
    next(err);
  }
};

orderController.addOrder = async (req, res, next) => {
  try {
    const {snakeId, quantity, total, paymentMethod } = req.body;
    const body = {
        userId: req.user.id, 
        snakeId:parseInt(snakeId,10), 
        quantity:parseInt(quantity,10), 
        total:parseInt(total,10), 
        paymentMethod}
    const data = await orderService.addOrder(body);
    res.json({message: "You have successfully placed your order!",data})
  } catch (err) {
    next(err);
  }
};

module.exports = orderController;
