var mongoose = require("mongoose");

var RecipeSchema = new mongoose.Schema({
	recipe_title: {type: String},
	recipe_post: {type: String},
	img: {type: String},
	category: {type: String},
	user: {type: String},
	created_at: {type: Date, default: Date.now},
	comments: {
		comment: {type: String},
		posted_by: {type: String},
		posted_at: {type: Date, default: Date.now},
		upvotes: {type: Number},
		downvotes: {type: Number}
	}
});

mongoose.model("Recipe", RecipeSchema);