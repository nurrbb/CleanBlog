const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');

const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

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

// Posts CRUD
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

// Pages
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/posts/edit/:id', pageController.getEditPostPage);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
