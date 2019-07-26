const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const validateEmail = function(email){
  return validator.isEmail(email);
}

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: [validateEmail, "Invalid Email"]
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", UserSchema)

module.exports = User;