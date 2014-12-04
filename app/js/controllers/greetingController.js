
angular.module('emcApp').controller('greetingController',
	function($scope) {
		var hours = (new Date()).getHours();

		var timeOfDay = 'Morning'

		if (hours > 18) {
			timeOfDay = 'Evening';
		} else if (hours > 11) {
			timeOfDay = 'Afternoon';
		}

		$scope.hours = hours;

		$scope.greeting = 'Excellent ' + timeOfDay + ' EMC';

		$scope.extraGreeting = function() {
			alert($scope.greeting);
		}
	});