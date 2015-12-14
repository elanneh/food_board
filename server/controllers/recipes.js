var mongoose = require("mongoose");
var Recipe = mongoose.model('Recipe');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / recipes - Index")
			// var customers = [{first_name:'Winners!!!!'}];
			// console.log(customers);
			// response.json(customers);
			Recipe.find({}, function(err, res){
				if(err){
					console.log(err);
					response.json(err);
					
				}else{
					// console.log(res);
					response.json(res);
				}
			})
		},

		create: function(request, response){
			console.log("Server / Ctrl / recipes - Create");
			console.log(request.body.user.name);
			var recipe = new Recipe;
			recipe.category = request.body.category.category_type;
			recipe.recipe_title = request.body.recipe_title;
			recipe.user = request.body.user.name;
			recipe.recipe_post = request.body.recipe_post;
			recipe.img = request.body.img;
			recipe.save(function(err, res){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					console.log(res);
					response.json(res);
				}
			})
		},

		show: function(request, response){
			console.log("Server / Ctrl / recipe - Show");
			console.log(request.params.id);
			Recipe.findById({_id:request.params.id}, function(err, res){
				if(err){
					console.log(err);
				}
				else{
					response.json(res);
				}
			})
		},
		update: function(request, response){
			console.log("Server / Ctrl / recipe - add comment");
			console.log(request.body.id);
			// Recipe.findOneAndUpdate({_id:request.body.id}, {$addToSet: {comments: {comment: request.body.comment}, {posted_by: request.body.posted_by}}}, function(err, record){
			// 	if(err){
			// 		console.log(err);
			// 		response.json({status:false});
			// 	}
			// 	else{
			// 		response.json(record);
			// 	}
			// })
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / recipes - Destroy");
			console.log("Destroy params id:", request.params.id);
			Recipe.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}

	}
})();