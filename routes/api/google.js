// Router object is built into Node and is an isolated instance of middleware and routes. Once we have our router, we can use middleware and HTTP routes such as get, put, post, etc.
const router = require("express").Router();

// Requiring the googleController which searches the Google Books API and returns books
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);

  // Export the router instance
module.exports = router;
