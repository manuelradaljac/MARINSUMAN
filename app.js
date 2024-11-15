const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  const ime = 'Manuel Radaljac';
  res.render('index', { title: 'Home', ime });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', { title: 'Galerija' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Kontakt stranica' });
});
