angular.module('emcApp')
	.controller('addController', function($scope,placesData) {
		$scope.addPlace = function(newPlace) {

			var place = angular.copy(newPlace);

			placesData.addPlace(place);
		}
	});