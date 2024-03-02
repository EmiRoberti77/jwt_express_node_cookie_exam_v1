const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const sk = process.env.SECRET_KEY;

module.exports = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, sk);
    console.log('user from token', user);
    next();
  } catch (err) {
    console.log(err);
    res.redirect(`/?jwt_err=${err.message}`);
  }
};
