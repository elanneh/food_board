var mongoose = require("mongoose");
var User = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Users - Index")
			// var customers = [{name:'Winners!!!!'}];
			// console.log(customers);
			// response.json(customers);
			User.find({}, function(err, res){
				if(err){
					console.log(err);
					response.json(err);
					
				}else{
					// console.log(res);
					response.json(res);
				}
			})
		},
		//how to get the last inserted entry?

		create: function(request, response){
			console.log("Server / Ctrl / Users - Create");
			console.log(request.body.name);
			var user = new User;
			user.name = request.body.name;
			user.save(function(err, res){
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
		destroy: function(request, response){
			console.log("Server / Ctrl / Recipes - Destroy");
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