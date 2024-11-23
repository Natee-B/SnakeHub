const prisma = require("../config/prisma");

const snakeService = {};

snakeService.addSnake = async (data) =>
  await prisma.snake.create({
    data
    // :{
    //   description : body.description,
    //   price: body.price,
    //   birthdate: body.birthdate,
    //   age : body.age,
    //   gender: body.gender,
    //   feedingType: body.feedingType,
    //   categoryId : body.categoryId,
    //   morphId: body.morphId,
    //   recommend: body.recommend,
    //   img,
    // }
  });

snakeService.updateSnake = async (snakeId,data) =>
  await prisma.snake.update({
    where: { id: parseInt(snakeId, 10) },
    data
  });

snakeService.deleteSnake = async (snakeId) =>
  await prisma.snake.delete({
    where: { id: parseInt(snakeId, 10)},
  });

module.exports = snakeService;
