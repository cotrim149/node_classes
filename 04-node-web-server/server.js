const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  var homePageContent = {
    headTitle: 'Home',
    pageTitle: 'My custom Home page',
    welcomeMessage: 'Welcome to my personal site!',
    currentYear: new Date().getFullYear()
  };

  res.render('home.hbs', homePageContent);
});

app.get('/about', (req, res) => {

  var aboutPageContent = {
    headTitle: 'About',
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
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