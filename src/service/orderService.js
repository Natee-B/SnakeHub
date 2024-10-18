const prisma = require("../config/prisma")
const orderService = {}

orderService.order = async () => {
    return await prisma.order.findMany({
        include: {
            Snake: true   
          },
    })
  }

orderService.addOrder = async (body) => {
    return await prisma.order.create({
      data: {
        userId: body.userId,
        Snake: { // ใช้ชื่อโมเดลที่สัมพันธ์กัน
          connect: {
            id: body.snakeId, // เชื่อมต่อกับงูที่มี id
          },
        },
        quantity: body.quantity,
        total: body.total,
        paymentMethod: body.paymentMethod,
      },
    });
  }

module.exports = orderService