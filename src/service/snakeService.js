const prisma = require("../config/prisma");

const snakeService = {};

snakeService.addSnake = async (data) =>
  await prisma.snake.create({
    data
  });

snakeService.updateSnake = async (data, snakeId) =>
  await prisma.snake.update({
    where: { id: parseInt(snakeId, 10) },
    data
  });

snakeService.deleteSnake = async (snakeId) =>
  await prisma.snake.delete({
    where: { id: parseInt(snakeId, 10)},
  });

module.exports = snakeService;
