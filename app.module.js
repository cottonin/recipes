'use strict';

// Define the `cookbookApp` module
// This will work as a major dictionary of all the modules, so to say.
angular.module('cookbookApp', [
	// depends on "recipeList" module
	'ngRoute',
	'recipeList',
	'recipeDetail',
	'ingredientList'
]);
