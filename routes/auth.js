const express = require("express");

const router = express.Router();
const passport = require("passport");

const authController = require("../controllers/auth.controller");

/* post */
router.post("/login", authController.loginWithEmail);

router.post("/login", passport.authenticate("local"), authController.login);

router.post(
  "/login/google",
  passport.authenticate("google-token", { session: false }),
  authController.login
);

router.post(
  "/login/facebook",
  passport.authenticate("facebook-token", { session: false }),
  authController.login
);

module.exports = router;
