var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/node-app-model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var routes = require('./api/routers/node-app-router'); //importing route
routes(app); //register the route

app.get('/display', function(req, res) {
        res.sendFile(__dirname +'/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
app.get('*', function(req, res) {
         res.sendFile(__dirname +'/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
app.listen(port);


console.log('First Node Application: ' + port);