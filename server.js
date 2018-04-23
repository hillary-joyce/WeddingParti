var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

// Requiring the `User` model for accessing the `users` collection
var Wedding = require("./models/wedding.js");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/weddingtest1");

// // Routes
// Wedding.create({weddingName:'test3', password:"testtesttest", users:["test", "testtes", 'tesss'],
//   weddingDate: "3/1/17",
//   taskManager: [
//     {projectName: "cool", taskItems:["this", "thind1", "anotherthing"]},
//     {projectName: "cool3", taskItems:["this2", "thind1", "anotherthing"]},
//   ]});



Wedding.findOne({weddingName: 'test3', 'taskManager.projectName': 'cool3'}
).then(dbModel => console.log(dbModel.taskManager));

// Route to post our form submission to mongoDB via mongoose
// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});





// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;
//
// // Configure body parser for AJAX requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // Serve up static assets
// app.use(express.static("client/build"));
// // Add routes, both API and view
// app.use(routes);
//
// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/weddingPartiTest1"
// );
//
// Wedding.create({weddingName:"test1", password:"testtesttes", users:["a", "b", "c"]});
//
// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
