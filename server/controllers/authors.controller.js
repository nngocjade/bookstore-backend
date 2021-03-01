const Author = require("../models/author");
const Book = require("../models/book");

// CREATE AUTHOR
const createAuthor = async (req, res) => {
  try {
    const author = new Author({ name: req.body.name });

    await author.save();

    res.status(201).json({
      success: true,
      data: author,
      message: `Author ${author.name} created!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// GET ALL AUTHORS

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    res.status(200).json({
      success: true,
      data: authors,
      message: `Found all authors!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// GET SINGLE AUTHOR BY ID
const getSingleAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    const books = await Book.find({ author: req.params.id });
    res.status(200).json({
      success: true,
      data: { author, books },
      messages: `Author ${author.name} found!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// UPDATE AUTHOR BY ID
const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: author,
      message: `Author ${author.name} updated!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// DELETE AUTHOR BY ID
const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,

      data: author,

      message: `Deleted author ${author.name}`,
    });
  } catch (err) {
    res.status(400).json({
      success: fail,

      error: err.message,
    });
  }
};

module.exports = {
  createAuthor,
  getAllAuthors,
  getSingleAuthor,
  updateAuthor,
  deleteAuthor,
};
