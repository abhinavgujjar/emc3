var app = angular.module('emcApp2', []);

function mainCtrl($scope, $timeout) {
	var hours = (new Date()).getHours();

	var timeOfDay = 'Morning'

	if ( hours > 18 ){
		timeOfDay = 'Evening';
	} else if (hours > 11){
		timeOfDay = 'Afternoon';
	}

	$scope.greeting = 'Excellent ' + timeOfDay + ' EMC';


}

app.controller('greetingController', mainCtrl);

app.controller('mainController', function($scope){


	$scope.greeting = 'Good Morning';
});

