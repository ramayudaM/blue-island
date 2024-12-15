const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const { loadArtists } = require('./utils/artists');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.set('layout', 'layouts/main-layout');

app.get('/', (req, res) => {
  const artists = loadArtists();

  res.render('home', {
    title: 'Blue Island',
    layout: 'layouts/main-layout',
    css: 'home',
    artists,
  });
});

app.get('/business', (req, res) => {
  res.render('business', {
    title: 'Blue Island - Business',
    layout: 'layouts/main-layout',
    css: 'business',
  });
});

app.get('/jus', (req, res) => {
  res.render('merchandise', {
    title: 'Blue Island - Merchandise',
    layout: 'layouts/main-layout',
    css: 'merchandise',
  });
});

app.listen(3000, () => {
  console.log(`Server Running Port ${3000}`);
});
