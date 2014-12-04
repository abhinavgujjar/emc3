angular.module('emcApp')
	.controller('addController', function($scope, placesData) {
		$scope.addPlace = function(newPlace) {

			if ($scope.countryForm.$invalid) {
				alert('invalid, aborting aborting');
			} else {
				var place = angular.copy(newPlace);

				placesData.addPlace(place);
			}
		}
	});