const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './views/static')));


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
    app.get('/resume', function(req, res) {
      res.render('pages/resume');
    });
    app.get('/certifications', function(req, res) {
      res.render('pages/certifications');
    });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});