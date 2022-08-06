const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
  });
};

module.exports = generateToken;