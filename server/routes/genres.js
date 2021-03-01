const express = require("express");

const router = express.Router();

const genreController = require("../controllers/genres.controller");

/* CREATE genre */
router.post("/", genreController.createGenre);

/* GET all genre */
router.get("/", genreController.getAllGenres);

/* GET single genre by id */
router.get("/:id", genreController.getSingleGenre);

/* UPDATE genre by id */
router.put("/:id", genreController.updateGenre);

/* DELETE genre by id */
router.delete("/:id", genreController.deleteGenre);

module.exports = router;
