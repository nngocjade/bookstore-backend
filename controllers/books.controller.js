const Book = require("../models/book");

// CREATE BOOKS
const createBook = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const book = new Book({ title, description, author, owner: req.userId });

    await book.save();
    const populatedBook = await Book.findById(book.id).populate("author");
    res.status(201).json({
      success: true,
      data: populatedBook,
      message: `Book "${book.title}" created!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

// GET ALL BOOKS
const getBooks = async (req, res) => {
  try {
    const books = await Book.find({})
      .populate("author")
      .populate("genres", "-_id -__v");
    res.status(200).json({
      success: true,
      data: books,
      message: `${books.length} books found!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

// GET MY BOOKS
const getMyBooks = async (req, res) => {
  try {
    const books = await Book.find({ owner: req.userId })
      .populate("author")
      .populate("genres", "-_id -__v");

    res.status(200).json({
      success: true,
      data: books,
      message: `${books.length} books found!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  createBook,
  getBooks,
  getMyBooks,
};
