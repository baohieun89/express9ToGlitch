// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var shortid = require('shortid');

var listRoute = require('./routes/list.route');
var userRoute = require('./routes/user.route');
var transRoute = require('./routes/transaction.route')


app.use('/list', listRoute);
app.use('/users', userRoute);
app.use('/transactions', transRoute);
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.render('index');
});



// listen for requests :)
app.listen(3535, () => {
  console.log("Server listening on port " + 3535);
});
