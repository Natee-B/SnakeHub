const createError = require("../util/createError");

const authValidate = {};
authValidate.checkLogin = (
  identify,
  password,
) => {
  let email
  let username
  
  if (!identify.trim() || !password.trim()) {
    return createError(400, "Please fill in all required to register");
  } else if (/\S+@\S+\.com/.test(identify)) {
    email = identify;
  } else {
    username = identify;
  }
  return {email, username}
};

authValidate.checkRegister = (
  username,
  password,
  email,
  confirmPassword
) => {
  if (!username.trim() || !password.trim() || !email.trim()) {
    return createError(400, "Please fill in all required to register");
  }
  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof email !== "string"
  ) {
    return createError(400, "Invalid input type");
  }
  if (password != confirmPassword) {
    return createError(400, "Password not match");
  }
};
module.exports = authValidate;
