const prisma = require("../config/prisma");
const createError = require("../util/createError");
const bcrypt = require("bcryptjs");
authService = {};

authService.isEmailExist = async (email, string) => {
  const isEmailExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (isEmailExist && string == "register") {
    return createError(400, "This Email is already in use");
  }

  if (!isEmailExist && string == "login") {
    return createError(400, "Email Not Found");
  }
  return isEmailExist
};

authService.CreateUser = async (dataUser) => 
  await prisma.user.create({
    data: dataUser,
    select: { id: true, email: true, role: true },
  });


authService.isUserNameExist = async (username) => {
  const user = await prisma.user.findFirst({
    where: { username },
  });
  if (!user) {
    return createError(400, "wrong username or password (user)");
  }
  return user;
};

authService.compare = async (password, userPassword) => {
  const Match = await bcrypt.compare(password, userPassword);
  if (!Match) {
    return createError(400, "wrong username or password (password)");
  }
};

// authService.isAdmin = async (userId) => { //เปลี่ยนจาก service ไปที่ middleware แล้ว
//   const userIdInt = parseInt(userId, 10);
//   return await prisma.user.findFirst({
//     where: {
//       id: userIdInt,
//       role: "ADMIN",
//     },
//   });
// };

module.exports = authService;
