app.controller("FoodController", function($routeParams, CategoryFactory, UserFactory, RecipeFactory){
	console.log("FoodController loaded");
	var that = this;

// Categories
	var getCategories = function(){
		console.log("controller get categories");
		CategoryFactory.getCategories(function(categories){
			that.categories = categories;
		});
	}

	getCategories();

// Users


	var getUsers = function(){
		console.log("controller get users");
		UserFactory.getUsers(function(users){
			that.users = users;
		});
	}

	this.addUser = function(newUser){
		console.log("clicked");
		if(newUser){
			UserFactory.addUser(newUser, function(){
				getUsers();
			});
		}
	}

	this.removeUser = function(user){
		console.log("remove user", user);
		UserFactory.removeUser(user, function(){
			getUsers();
		})
	}

	getUsers();

//Recipes


	var getRecipes = function(){
		console.log("controller get recipes");
		
		RecipeFactory.getRecipes(function(recipes){
			console.log(this);
			that.recipes = recipes;
		});
	}
	

	this.addRecipe = function(newRecipe){
		console.log("recipe add clicked");
		if(newRecipe){
			RecipeFactory.addRecipe(newRecipe, function(){
				getRecipes();
			});
		}
	}

	this.viewRecipe = function(){
		console.log("getting recipe...")
		// using $routeParams to get the topic id out of the url
		RecipeFactory.viewRecipe($routeParams.id, function(recipe){
			console.log("here's the recipe", recipe);
			that.recipe = recipe;
		})
	}	

	this.addComment = function(comment){
		console.log("adding comment ", comment);
		RecipeFactory.addComment(comment, function(){
			getRecipes();
		})
	}


	this.removeRecipe = function(recipe){
		console.log("remove recipe ", recipe);
		RecipeFactory.removeRecipe(recipe, function(){
			getRecipes();
		})
	}



	// -------- initial page load -------------------
	getCategories();
	getRecipes();
	// getComments();
	// checked if an id was passed through, if so, running the viewTopic function
	if($routeParams.id){ this.viewRecipe(); }

});