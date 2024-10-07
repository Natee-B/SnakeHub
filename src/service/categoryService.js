const prisma = require("../config/prisma");
const createError = require("../util/createError");
const categoryService = {};

categoryService.category = async () => {
  return await prisma.category.findMany( )
};

categoryService.getMorphsByCategory = async (data,morph) => {
  const categoryId = parseInt(data,10)
  return await prisma.snake.findFirst({
    where: { categoryId,morph }
  })
};

categoryService.morph = async () => {
  return await console.log("Renter all morph");
};

categoryService.addCategory = async ( data ) => {
    return await prisma.category.create({
        data,
        });

    };

 
    categoryService.updateCategory = async ( categoryId,speciesName, description, img, userId ) => {
      return await prisma.category.update({
          where:{id : parseInt(categoryId,10)},
          data:{speciesName, description, img, userId: parseInt(userId,10)}
          });
      };


categoryService.deleteCategory = async ( categoryId ) => {
    return await prisma.category.delete({
        where:{id: parseInt(categoryId,10)}
        });
    };

module.exports = categoryService;
