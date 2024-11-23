const cloudinary = require("../config/cloudinary");
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

orderController.updateOrder = async (req, res, next) => {
  try {
    const{status,shippingStatus,trackingNumber} = req.body    
    const{orderId} = req.params
    await orderService.updateOrder(orderId,status,shippingStatus,trackingNumber);
    res.json({message: "UpdateOrder Successful!"})
  } catch (err) {
    next(err);
  }
};

orderController.addOrder = async (req, res, next) => {
  try {
    const {snakeId, total, paymentMethod } = req.body;
    const body = {
        userId: req.user.id, 
        snakeId:parseInt(snakeId,10), 
        //quantity:parseInt(quantity,10), รอใช้ตอนมีตะกร้า 
        total:parseInt(total,10), 
        paymentMethod,
        }
        const file = req.file;
        let img
        if(file){
          const uploadResult  = await cloudinary.uploader.upload(file.path)
          img = uploadResult.secure_url;
        }else {
          img = null; 
        }
    await orderService.addOrder(body,img);
    res.json({message: "You have successfully placed your order!"})
  } catch (err) {
    next(err);
  }
};

orderController.deleteOrder = async (req, res, next) => {
  try {
    const{orderId} = req.params
    await orderService.deleteOrder(orderId);
    res.json({message: "Cancel Order!"})
  } catch (err) {
    next(err);
  }

  
};

module.exports = orderController;
