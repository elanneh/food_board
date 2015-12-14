var mongoose = require("mongoose");

module.exports = function(app) {
  	var categories = require('../controllers/categories.js');
	app

	// - - - Categories - - -
    // Index
	.get('/categories', function(request, response) { 
		categories.index(request, response) })
	// New
	.get('/categories/new', function(request, response) { 
		categories.create(request, response) })
	// Show
	.get('/categories/:id', function(request, response) { 
		categories.show(request, response) })
	// Edit 
	.post('/categories/:id/edit', function(request, response) { 
		categories.update(request, response) })
	// Create
	.post('/categories', function(request, response) { 
		categories.create(request, response) })	
	// Destroy
	.delete('/categories/:id', function(request, response) { 
		categories.destroy(request, response) })
	// Update
	.put('/categories/:id', function(request, response) { 
		categories.update(request, response) })
  

	// - - - Recipes - - -
    // Index
    var recipes = require('../controllers/recipes.js');
	app

	.get('/recipes', function(request, response) { 
		recipes.index(request, response) })
	// New
	.get('/recipes/new', function(request, response) { 
		recipes.create(request, response) })
	// Show
	.get('/recipes/:id', function(request, response) { 
		recipes.show(request, response) })
	// Edit 
	.post('/recipes/:id/edit', function(request, response) { 
		recipes.update(request, response) })
	// Create
	.post('/recipes', function(request, response) { 
		recipes.create(request, response) })	
	// Destroy
	.delete('/recipes/:id', function(request, response) { 
		recipes.destroy(request, response) })
	// Update
	.put('/recipes/:id', function(request, response) { 
		recipes.update(request, response) })


	var users = require('../controllers/users.js');
	app

	// - - - Users - - -
    // Index
	.get('/users', function(request, response) { 
		users.index(request, response) })
	// New
	.get('/users/new', function(request, response) { 
		users.create(request, response) })
	// Show
	.get('/users/:id', function(request, response) { 
		users.show(request, response) })
	// Edit 
	.post('/users/:id/edit', function(request, response) { 
		users.update(request, response) })
	// Create
	.post('/users', function(request, response) { 
		users.create(request, response) })	
	// Destroy
	.delete('/users/:id', function(request, response) { 
		users.destroy(request, response) })
	// Update
	.put('/users/:id', function(request, response) { 
		users.update(request, response) })

};	