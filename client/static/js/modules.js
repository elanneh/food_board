var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

	.when('/', {
		controller: 'FoodController',
		controllerAs: 'main',
		templateUrl: '/registration.html'
	})
	.when('/dashboard', {
		controller: 'FoodController',
		controllerAs: 'main',
		templateUrl: '/partials/dashboard.html'
	})
	.when('/recipe/:id', {
		controller: 'FoodController',
		controllerAs: 'main',
		templateUrl: '/partials/recipe.html'
	})	
	
	.otherwise('/')
})