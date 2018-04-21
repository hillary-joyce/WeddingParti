
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

// Requiring the `User` model for accessing the `users` collection
const Wedding = require("./models/wedding.js");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/weddingdb");



Wedding.findOne({weddingName: "test6"}, 'calendarDates')
  .then(dbModel => console.log(dbModel));


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
