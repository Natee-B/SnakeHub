const prisma = require("../config/prisma")
const homeService = {}

homeService.homepage = async () => {
    return await prisma.category.findMany()
}

module.exports = homeService