const prisma = require("../config/prisma");
const orderService = {};

orderService.order = async () => 
  await prisma.order.findMany({
    include: {
      user: {
        select: {
          email: true,
          username: true,
        },
      },
      Snake: {
        include: {
          category: true,
          morph: true,
        },
      },
    },
  });

  orderService.updateOrder = async (orderId,status,shippingStatus,trackingNumber) => 
    await prisma.order.update({
      where: { id: parseInt(orderId,10) }, 
      data: { status,shippingStatus,trackingNumber }, 
    });

  orderService.deleteOrder = async (orderId) => 
    await prisma.order.delete({
      where: { id: parseInt(orderId,10) }, 
    });
  

orderService.addOrder = async (body,img) => 
  await prisma.order.create({
    data: {
      userId: body.userId,
      Snake: {
        // ใช้ชื่อโมเดลที่สัมพันธ์กัน
        connect: {
          id: body.snakeId, // เชื่อมต่อกับงูที่มี id
        },
      },
      // quantity: body.quantity,  รอใช้ตอนมีตะกร้า
      total: body.total,
      paymentMethod: body.paymentMethod,
      img
    },
  });


module.exports = orderService;
