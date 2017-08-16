const data = require('./data.js');
const express = require('express');
const mustache = require('mustache-express');
const app = express();
const port = 3000;

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/index', function (req, res) {
 res.render('index', data);
});

app.get('/:id', function (req, res) {
 let profileId = req.params.id - 1;
 res.render('id', data.users[profileId]);
})

app.listen(port, function (){
 console.log('Robo-Profiles starting...');
});
