const express = require("express");

const router = express.Router();

const authorsController = require("../controllers/authors.controller");

/* CREATE author */
router.post("/", authorsController.createAuthor);

/* GET all authors */
router.get("/", authorsController.getAllAuthors);

/* GET single author by id */
router.get("/:id", authorsController.getSingleAuthor);

/* UPDATE author by id */
router.put("/:id", authorsController.updateAuthor);

/* DELETE author by id */
router.delete("/:id", authorsController.deleteAuthor);

module.exports = router;
