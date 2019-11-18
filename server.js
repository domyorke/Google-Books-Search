// Require express, moongoose, and routes for our server
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Setting an instance for our express server function
const app = express();
// Run the server on whatever is in the environment variable PORT (for Heroku), or 3001 if there's nothing there and we are local. 
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
// Middleware express method built into express to recognize the incoming request object as strings or arrays.
app.use(express.urlencoded({ extended: true }));
// Middleware express method to recognize incoming request objects as JSON objects
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user1:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
