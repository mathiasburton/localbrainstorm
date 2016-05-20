var brainstormModule = angular.module("brainstormApp", ["ngRoute", "ui.bootstrap", "ngPassword"]);

brainstormModule.config(function ($routeProvider){
	$routeProvider
	.when('/organizations', {
		templateUrl:'/templates/organizations/index.html',
		controller: 'organizationsController',
		controllerAs: 'oc'
	})

	.when('/organizations/new', {
		templateUrl: '/templates/organizations/new.html',
		controller: 'organizationsController',
		controllerAs: 'oc'
	})

	.when('/users', {
		templateUrl: '/templates/users/index.html',
		controller: 'usersController',
		controllerAs: 'uc'
	})
	
	.when('/users/new', {
		templateUrl: '/templates/users/new.html',
		controller: 'usersController',
		controllerAs: 'uc'
	})

	.when('/plans', {
		templateUrl: '/templates/plans/index.html',
		controller: 'usersController',
		controllerAs: 'uc'
	})

	.when('/issues', {
		templateUrl: '/templates/issues/index.html',
		controller: 'mainController',
		controllerAs: 'mc'
	})

	.when('/issues/homelessness', {
		templateUrl: '/templates/issues/homelessness.html'
	})

	.when('/', {
		templateUrl: '/templates/index.html',
		controller: 'mainController',
		controllerAs: 'mc'
	})
});
