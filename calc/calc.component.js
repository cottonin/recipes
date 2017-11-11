 'use strict';

// Register 'servingCalc' component, along with it's associated controller.
angular.
  module('cookbookApp').
  component('servingCalc', { // Always on camelCase
    template: '<span></span>',
    controller: function servingCalcController(number, serving) {
      var number = recipes.ingredient.quantity;
      var serving = recipes.servings;
      return number / servings;
    }
  });