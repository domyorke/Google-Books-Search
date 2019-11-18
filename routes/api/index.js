// The path module provides utilities for working with file and directory paths such as format(), join(), parse() and dirname().
const path = require("path");
// Router object is built into Node and is an isolated instance of middleware and routes. Once we have our router, we can use middleware and HTTP routes such as get, put, post, etc.
const router = require("express").Router();

//Creating variables to refer to for our books and google js files.
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book routes
router.use("/books", bookRoutes);

// Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
