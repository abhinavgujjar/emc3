angular.module('emcApp')
	.controller('addController', function($scope) {
		$scope.addPlace = function(newPlace) {

			var place = angular.copy(newPlace);

			$scope.person.placesVisited.push(place);
		}
	});