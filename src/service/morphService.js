const prisma = require("../config/prisma");

const morphService = {};

morphService.addMorph = async (name, categoryId) =>
  await prisma.morph.create({
    data: { name, categoryId: parseInt(categoryId, 10) },
  });
  
morphService.updateMorph = async (name, categoryId, morphId) =>
  await prisma.morph.update({
    where: { id: parseInt(morphId, 10) },
    data: { name, categoryId: parseInt(categoryId, 10) },
  });

morphService.deleteMorph = async (morphId) =>
  await prisma.morph.delete({
    where: { id: parseInt(morphId, 10) },
  });

module.exports = morphService;
