var brainstormModule = angular.module("brainstormApp", ["ngRoute", "ui.bootstrap", "ngPassword"]);

brainstormModule.config(function ($routeProvider){
	$routeProvider
	.when('/plans', {
		templateUrl: '/templates/plans/index.html',
		controller: 'usersController',
		controllerAs: 'uc'
	})
});
