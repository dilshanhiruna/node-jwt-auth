const mongoose = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter an pasword"],
    minlength: [6, "Minimun pass length is 6"],
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
