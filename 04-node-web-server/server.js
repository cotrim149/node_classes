const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

// registering partials
hbs.registerPartials(__dirname + '/views/partials');
// setting view engine of node with Handlebars
app.set('view engine', 'hbs');

// adding middlewares
// setting pre reponse for each connection
app.use((req, res, next) => {
  var now = new Date().toString();
  var log =  `${now}: ${req.method} ${req.url}`;
  console.log(log);
  
  fs.appendFile('server.log',log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

// call this middleware in each request
// app.use((req, res, next)=>{
//   res.render('maintenance.hbs');
// });

// setting static folder of public htmls
app.use(express.static(__dirname + '/public'));

// adding helpers
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

// Routes
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

// put node to listen in 3000 port of localhost
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});