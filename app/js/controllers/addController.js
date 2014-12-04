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

		$scope.newPlace = {
			cities : ['dummy']
		}

		$scope.addCity = function(city){
			$scope.newPlace.cities.push(city);

			$scope.newCity = '';
		};

	});