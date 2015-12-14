var mongoose = require("mongoose");
var Category = mongoose.model('Category');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / categories - Index")

			Category.find({}, function(err, res){
				if(err){
					console.log(err);
					response.json(err);
					
				}else{
					// console.log(res);
					response.json(res);
				}
			})
		// },

		// create: function(request, response){
		// 	console.log("Server / Ctrl / orders - Create");
		// 	// console.log(request.body.name.name);
		// 	// console.log(request.body.item.item);
		// 	// console.log(request.body.qty);
		// 	var order = new Order;
		// 	order.name = request.body.name.name;
		// 	order.item = request.body.item.item;
		// 	order.qty = request.body.qty;
		// 	order.save(function(err, res){
		// 		if(err){
		// 			console.log(err);
		// 			response.json({status:false});
		// 		}
		// 		else{
		// 			console.log(res);
		// 			response.json(res);
		// 		}
		// 	})
		// },
		// destroy: function(request, response){
		// 	console.log("Server / Ctrl / Users - Destroy");
		// 	console.log("Destroy params id:", request.params.id);
		// 	Order.remove({_id:request.params.id}, function(err){
		// 		if(err){
		// 			console.log(err);
		// 			response.json({status:false});
		// 		}
		// 		else{
		// 			response.json({status:true});
		// 		}
		// 	})
		}
	}
})();