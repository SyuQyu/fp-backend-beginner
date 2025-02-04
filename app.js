const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);
// Logic goes here

module.exports = app;
