app.factory('CategoryFactory', function($http, $location){
	return {
		getCategories: function(callback){
			console.log("CategoryFactory getCats");

			$http.get('/categories').success(function(response){
				callback(response);
			})
		}
	}
});

app.factory('UserFactory', function($http, $location){
	return {
		getUsers: function(callback){
			console.log("UserFactory getUsers");

			$http.get('/users').success(function(response){
				callback(response);
			})
		},
		addUser: function(newUser, callback){
			if(newUser){
				console.log("UserFactory add ", newUser);
				$http.post('/users', newUser).success(function(response){
					callback(response);

				});
				$location.path('/dashboard');
				//how to carry entered user's name to dashboard page?
			}
		},
		removeUser: function(user, callback){
			console.log("UserFactory remove ", user);
			$http.delete('/users/'+user._id).success(function(){
				callback();
			})
		}
	}
});


app.factory('RecipeFactory', function($http, $location){
	return {

		getRecipes: function(callback){
			console.log("RecipeFactory getRecipe");

			$http.get('/recipes').success(function(response){
				callback(response);
			})
		},
		addRecipe: function(newRecipe, callback){
			if(newRecipe){
				console.log("RecipeFactory add ", newRecipe);
				$http.post('/recipes', newRecipe).success(function(response){
					callback(response);
				})
			}
		},
		viewRecipe: function(recipe_id, callback){
			// console.log(topic);
			$http.get('/recipes/'+recipe_id).success(function(response){
				callback(response);
			})
		},
		addComment: function(recipe, callback){
			console.log("RecipeFactory add comment ", recipe);
			$http.post('/recipes/'+recipe._id+'/edit').success(function(){
				callback();
			})
		},
		removeRecipe: function(recipe, callback){
			console.log("RecipeFactory remove ", recipe);
			$http.delete('/recipes/'+recipe._id).success(function(){
				callback();
			})
		}

	}
});
