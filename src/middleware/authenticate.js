const prisma = require("../config/prisma");
const createError = require("../util/createError");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer")) {
      return next(createError(401, "Unauthorized Token Missing"));
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return next(createError(401, "Unauthorized Token invalid"));
    }

    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findFirst({
      where: { id: jwtPayload.id },
    });
    if (!user) {
      return next(createError(401, "Unauthorized"));
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
