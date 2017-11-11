angular.
	module('recipeDetail').
	component('recipeDetail', {
		templateUrl: 'recipe-detail/recipe-detail.template.html',
		controller: ['$http', '$routeParams',
		  function RecipeListController($http, $routeParams) {
		  var self = this;
		  $http.get('recipes/' + $routeParams.recipeId + '.json').then(function(response) {
		    self.recipes = response.data;
		    var ingredientsArray = self.recipes.ingredients;
		    var quantityArray = self.recipes.quantity;
		    self.ingredientsQuantity = ingredientsArray.map(function(value, index) {
		    	return {
		    		item: value,
		    		quantity: quantityArray[index]
		    	}
		    });
		    console.log(self.ingredientsQuantity)
		  })
		  }
		]
	});