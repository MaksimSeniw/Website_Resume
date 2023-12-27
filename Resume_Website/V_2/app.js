var express = require('express');
var app = express();

app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  res.render('pages/home');
});
app.get('/home', function(req, res) {
    res.render('pages/home');
  });
  app.get('/projects', function(req, res) {
    res.render('pages/projects');
  });
  app.get('/skills', function(req, res) {
    res.render('pages/skills');
  });

  app.get('/v1', function(req, res) {
    res.render('pages/v1');
  });
  app.get('/work', function(req, res) {
    res.render('pages/work');
  });
app.listen(3000);
console.log('Server is listening on port 3000');