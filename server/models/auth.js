const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
