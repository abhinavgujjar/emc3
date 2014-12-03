var app = angular.module('emcApp2', []);

function mainCtrl($scope, $timeout) {
	var companyName = 'Microsoft';

	var hours = (new Date()).getHours();

	var timeOfDay = 'Morning'

	if ( hours > 18 ){
		timeOfDay = 'Evening';
	} else if (hours > 11){
		timeOfDay = 'Afternoon';
	}

	$scope.hours = hours;

	$scope.greeting = 'Excellent ' + timeOfDay + ' EMC';
	$scope.companyName = companyName;


	$scope.companies = ['Microsoft', 'EMC', 'Intel'];

}

app.controller('greetingController', mainCtrl);

app.controller('mainController', function($scope){


	$scope.greeting = 'Good Morning';
});

