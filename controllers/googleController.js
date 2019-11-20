// Require axios and set our models folder to variable "db"
const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  // Findall is a function that takes in a request and a response as parameters
  findAll: function (req, res) {
    // Destructuring the req object into req.query and req.params with ES6 syntax
    const { query: params } = req;

    // Make a request to the googlebooks API with the parameter at the end of the url
    axios.get("https://www.googleapis.com/books/v1/volumes", {
      params
    })
      // Once the API is hit...
      .then(results =>
        // Filter the results of the returned JSON object
        results.data.items.filter(
          // Selecting our parameters in the JSON object (title, infoLink, authors etc.)
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // .then 
      .then(apiBooks =>
        // The find() method returns the value of the first element in the provided array that satisfies the tested function
        db.Book.find().then(dbBooks =>
          // the filter() method creates a new array with all elements that pass the test implemented by the provided function
          apiBooks.filter(apiBook =>
            // The every() method executes the function once for each element present in the array:
            // If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      // return books as a json object
      .then(books => res.json(books))
      // If error, return error
      .catch(err => res.status(422).json(err));
  }
};
