'use strict';

angular.
  module('cookbookApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/recipes', {
          template: '<recipe-list></recipe-list>'
        }).
        when('/recipes/:recipeId', {
          template: '<recipe-detail></recipe-detail>'
        }).
        when('/add', {
          template: '<add-recipe></add-recipe>'
        }).
        otherwise('/recipes');
    }
  ]);
