const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');

const Post = require('./models/Post'); 

const app = express();

mongoose
  .connect('mongodb://127.0.0.1:27017/cleanblog-test-db')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('DB error:', err));

app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// ROUTES
app.get('/', async (req, res) => {
  const posts = await Post.find({}).sort('-dateCreated');
  res.render('index', { posts });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
