'use strict'

// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");

// create express app
const  app = express();
require("./config/db");

// Import API route
var routes = require('./api/routes/todoRoutes'); //importing route
// define port to run express app
const  port = process.env.PORT || 8080;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Add endpoint
app.get('/', (req, res) => {
res.send("Hello World");
});

// Listen to server
app.listen(port, () => {

console.log(`My Server running at http://localhost:${port}`);
});
routes(app);
