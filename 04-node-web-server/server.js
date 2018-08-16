const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello express!</h1>');
  res.send( {
    name: 'Cotrim',
    likes: [
      'swimming',
      'programming'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page!');
});

app.get('/bad', (req,res) => {
  res.send({
    errorMessage: 'Unable to handle request!'
  });
})

app.listen(3000);