const prisma = require("../config/prisma");
const createError = require("../util/createError");
const categoryService = {};

categoryService.category = async () => 
  await prisma.category.findMany({
    include: {
      morph: true, // assuming 'morphs' is the relation field in the Category model
    },
  });


categoryService.getAllMorph = async () => 
  await prisma.morph.findMany();

categoryService.getMorphsByCategory = async (cId,mId) => 
  await prisma.snake.findMany({
    where: { 
      AND:[
        {categoryId: parseInt(cId, 10)},
        {morphId: parseInt(mId, 10)},
      ],
    },
    include: {
      category: true,  
      morph: true   
    },
  });


categoryService.getAllSnake = async () => 
  await prisma.snake.findMany({
    include: {
      category: true,  
      morph: true,
      order: true   
    },
  })


categoryService.addCategory = async (body,img) => 
  await prisma.category.create({
    data:{
      speciesName: body.speciesName,
      description: body.description,
      img
    }
  });


categoryService.updateCategory = async (
  categoryId,
  speciesName,
  description,
  img,
) => 
  await prisma.category.update({
    where: { id: parseInt(categoryId, 10) },
    data: { speciesName, description, img },
  });


categoryService.deleteCategory = async (categoryId) => 
   await prisma.category.delete({
    where: { id: parseInt(categoryId, 10) },
  });


module.exports = categoryService;
