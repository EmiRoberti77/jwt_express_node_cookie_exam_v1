const express = require('express');
const addRouter = express.Router();
const cookieJWTAuth = require('../middleware/cookieJWTAuth');

addRouter.get('/data', cookieJWTAuth, (req, res) => {
  console.log('add req cookies', req.cookies);
  console.info('/data auth success');
  res.redirect('/welcome?success=jwt_verified');
});

module.exports = addRouter;
