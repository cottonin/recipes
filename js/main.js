var app = angular.module('cookbookApp', ['ngRoute']);

	app.controller('recipesCtrl', mainController)
	app.config(function($routeProvider){
		$routeProvider
			.when("/", {
				controller: "recipesCtrl",
				controllerAs: "vm",
				templateUrl: "index.html"
			})
	});

function mainController($scope, $http){
	var vm=this;

	vm.sort = false;
	vm.campo = "title";
	vm.searchthis='';
	
	var url = "api/recipes-list.json"

	$http.jsonp(url).success(function(answer){
		console.log("Got:", answer);
		vm.recipes = answer.recipes;
		vm.category = answer.category;
		vm.types = answer.type
	});

}