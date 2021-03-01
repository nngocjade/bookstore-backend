const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");

/* post */
router.post("/login", authController.loginWithEmail);

module.exports = router;
