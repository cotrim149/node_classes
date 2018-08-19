const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  var homePageContent = {
    headTitle: 'Home',
    pageTitle: 'My custom Home page',
    welcomeMessage: 'Welcome to my personal site!'
  };

  res.render('home.hbs', homePageContent);
});

app.get('/about', (req, res) => {

  var aboutPageContent = {
    headTitle: 'About',
    pageTitle: 'About page'
  };

  res.render('about.hbs', aboutPageContent);
});

app.get('/bad', (req,res) => {
  res.send({
    errorMessage: 'Unable to handle request!'
  });
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});