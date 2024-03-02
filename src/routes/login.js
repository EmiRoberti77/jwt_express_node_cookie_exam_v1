const jwt = require('jsonwebtoken');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const authRouter = express.Router();
const sk = process.env.SECRET_KEY;
console.log('sk', sk);

const getUser = () => {
  return { username: 'emi', password: 'roberti' };
};

authRouter.post('/login', (req, res) => {
  console.log('body', req.body);
  const savedUser = getUser();
  const { username, password } = req.body;
  if (username === savedUser.username && password === savedUser.password) {
    console.log('auth success');
    const token = jwt.sign(
      {
        username,
        company: 'abc ltd',
        site: 'emi.com',
      },
      sk,
      {
        expiresIn: '1h',
      }
    );

    res.cookie('token', token);
    res.redirect('/welcome?logged=true');
  } else {
    console.error('auth failed');
    res.redirect('/?message=failed_auth');
  }
  console.info('login route attached', req.body);
});

module.exports = authRouter;
