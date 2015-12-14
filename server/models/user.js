var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: { type: String, trim: true }
});

mongoose.model("User", UserSchema);