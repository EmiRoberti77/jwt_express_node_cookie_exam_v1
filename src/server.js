const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const authRouter = require('./routes/login');
const addRouter = require('./routes/add');
const app = express();
const port = 8081;

app.use(cors());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/auth', authRouter);
app.use('/add', addRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/welcome', (req, res) => {
  console.log(req.query);
  res.sendFile(path.join(__dirname, '../public/welcome.html'));
});

app.listen(port, () => {
  console.info(port, 'started', new Date().toISOString());
});
