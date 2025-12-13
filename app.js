const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');

const Post = require('./models/Post');

const app = express();

// CONNECT DB
mongoose
  .connect('mongodb://127.0.0.1:27017/cleanblog-test-db')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('DB error:', err));

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// ROUTES

// HOME - LIST POSTS
app.get('/', async (req, res) => {
  const posts = await Post.find({}).sort('-dateCreated');
  res.render('index', { posts });
});

// ABOUT
app.get('/about', (req, res) => {
  res.render('about');
});

// ADD POST PAGE
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

// CREATE POST
app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

// SINGLE POST PAGE
app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});

// EDIT PAGE (UPDATE FORM)
app.get('/posts/edit/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit_post', { post });
});

// UPDATE POST (PUT)
app.put('/posts/:id', async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.redirect(`/posts/${req.params.id}`);
});

// DELETE POST (DELETE)
app.delete('/posts/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
