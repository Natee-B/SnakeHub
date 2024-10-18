const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createError = require("../util/createError");
const authValidate = require("../validator/authValidate.js");
const authService = require("../service/authService");
const authController = {};

authController.Register = async (req, res, next) => {
  try {
    const { username, password, email, confirmPassword } = req.body;

    authValidate.checkRegister(username, password, email,confirmPassword);

    await authService.isEmailExist(email, "register");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authService.CreateUser({
      username,
      password: hashedPassword,
      email,
    });

    res.json({ message: "Registration successful!", user: newUser });
  } catch (err) {
    next(err);
  }
};

authController.Login = async (req, res, next) => {
  try {
    const {identify, password } = req.body;
    const {email,username} = authValidate.checkLogin( identify,password);
    let user
    if (email) {
      user = await authService.isEmailExist(email, "login");
    } else {
      user = await authService.isUserNameExist(username);
    }

    await authService.compare(password, user.password);

    const token = jwt.sign({ id: user.id, role: user.role },process.env.JWT_SECRET,{expiresIn: "30d",});

    const payload = { 
      id: user.id, 
      username: user.username,
      email: user.email,
      role:user.role
    }

    res.json({ 
      message: "Login successful!", 
      user: payload, 
      token 
    });
  } catch (err) {
    next(err);
  }
};

module.exports = authController;
