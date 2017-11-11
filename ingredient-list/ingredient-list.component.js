 'use strict';

// Register 'recipeList' component, along with it's associated controller.
angular.
  module('ingredientList').
  component('ingredientList', { // Always on camelCase
    templateUrl: 'ingredient-list/ingredient-list.template.html',
    controller: ['$http',
      function IngredientListController($http) {
      var self = this;
      $http.get('ingredients/ingredients-beta.json').then(function(response) {
        self.ingredients = response.data;
      });
    }
    ]
  });