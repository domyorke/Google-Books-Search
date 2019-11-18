// Router object is built into Node and is an isolated instance of middleware and routes. Once we have our router, we can use middleware and HTTP routes such as get, put, post, etc.
const router = require("express").Router();
// Requiring the bookController which searches the Google Books API and returns books
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
