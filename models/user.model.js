const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "please add username"],
  },
  email: {
    type: String,
    required: [true, "please add email"],
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    required: [true, "please add password"]
  },
}, {
    timestamps: true
}); 

module.exports = mongoose.model("User", UserSchema)