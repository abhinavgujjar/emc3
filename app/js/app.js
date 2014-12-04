//var limitResult = 40; //WRONG


var app = angular.module('emcApp', ['ngRoute', 'tjGoog']);

app.config(function($routeProvider){

	$routeProvider.when('/home', {
		templateUrl : 'partials/home.html'
	});

	$routeProvider.when('/listing', {
		templateUrl : 'partials/listing.html'
	});

	$routeProvider.when('/add', {
		templateUrl : 'partials/add.html',
		controller : 'addController'
	})

	$routeProvider.otherwise({redirectTo: '/home'})

})

app.filter('toSqMi', function(){

	return function(input, toAcres){
		var multi = 0.386102;
		if ( toAcres ){
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


app.factory('placesData', function(defaults, $http) {


	var service = {
		getPlaces: function(callback) {
			
			var promise = $http({
				method : 'GET',
				url : 'data/countries.json'
			});

			promise.success(function(data){
				callback(data);
			})

			//return countries;
		},
		addPlace: function(place) {

			if (!place.flag) {
				place.flag = defaults.flag
			}

			placesVisited.push(place);
		}
	};

	return service;

});