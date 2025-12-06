const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const myLogger = (req, res, next) => {
  console.log('Middleware log 001');
  next();
};

const myLogger2 = (req, res, next) => {
  console.log('Middleware log 001');
  next();
};

app.use(express.static('public'));
app.use(myLogger);
app.use(myLogger2);

app.get('/', (req, res) => {
  res.render('index');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
