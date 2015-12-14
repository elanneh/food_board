var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
  category_type: { type: String}
});

mongoose.model("Category", CategorySchema);