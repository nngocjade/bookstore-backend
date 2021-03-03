const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users.controller");
const { loginRequired } = require("../middlewares/authentication");

/* CREATE users */
router.post("/", usersController.createUser);

// /* GET current user by id */
router.get("/me", loginRequired, usersController.getCurrentUser);

// /* UPDATE user by id */
router.put("/me", loginRequired, usersController.updateProfile);

// /* DELETE author by id */
// router.delete("/:id", authorsController.deleteAuthor);

module.exports = router;
