//Setting variables to be called for our path, router, and apiRoutes.

// The path module provides utilities for working with file and directory paths such as format(), join(), parse() and dirname().
const path = require("path");
// Creating an express router variable for our subroutes. 
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes 
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

//Export the router
module.exports = router;
