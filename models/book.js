// Require mongoose ODM and set to variable "mongoose"
const mongoose = require("mongoose");
// Set mongoose.Schema to it's own constant, Schema, so it is easier to reference. Schema is part of mongo. 
const Schema = mongoose.Schema;

// const bookSchema is set to a new Schema. This is essentially parameters for our object
const bookSchema = new Schema({
  // title must be a string and must not be blank due to "required: true"
  title: { type: String, required: true },
  // subtitle must be a string
  subtitle: { type: String },
  //Authors are an array of strings (as there could be multiple), and are a arequired field
  authors: { type: [String], required: true },
  // A link to the book that is required and must be a string
  link: { type: String, required: true },
  // A string description that is required
  description: { type: String, required: true },
  // Image is required and must have a string for the URL
  image: { type: String, required: true },
  // GoogleID is required, and must have a unique ID. 
  googleId: { type: String, required: true, unique: true }
});

//Setting the mongoose model to the bookSchema to a const Book
const Book = mongoose.model("Book", bookSchema);

// Exporting Book
module.exports = Book;
