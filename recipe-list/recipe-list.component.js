 'use strict';

// Register 'recipeList' component, along with it's associated controller.
angular.
  module('recipeList').
  component('recipeList', { // Always on camelCase
    templateUrl: 'recipe-list/recipe-list.template.html',
    controller: ['$http',
      function RecipeListController($http) {
      var self = this;
      $http.get('recipes/recipes-beta.json').then(function(response) {
        self.recipes = response.data;
      });
    }
    ]
  });