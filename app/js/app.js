//var limitResult = 40; //WRONG


var app = angular.module('emcApp', ['ui.router', 'tjGoog']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'partials/home.html'
	});

	$stateProvider.state('listing', {
		url: '/listing',
		templateUrl: 'partials/listing.html'
	}).state('listing.quick', {
		url: '/quick',
		templateUrl: 'partials/quick.html'
	}).state('listing.fav', {
		url: '/fav',
		templateUrl: 'partials/favorites.html'
	});

	$stateProvider.state('add', {
		url: '/add',
		templateUrl: 'partials/add.html',
		controller: 'addController'
	})
	$stateProvider.state('details', {
		url: '/details',
		templateUrl: 'partials/details.html',
		controller: 'detailsController'
	})

	$urlRouterProvider.otherwise('/home');

})

app.controller('mainController', function($scope){
	$scope.favorites = [];
	$scope.$on('favorite:add', function(event, data){
		$scope.favorites.push(data.name);
	})
})

app.filter('toSqMi', function() {

	return function(input, toAcres) {
		var multi = 0.386102;
		if (toAcres) {
			multi = 247.105;
		}

		return input * multi;
	}
})

//services
app.value('limitResults', 20);

app.factory('defaults', function() {
	return {
		flag: '7AiQqse.png'
	}
});