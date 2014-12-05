angular.module('emcApp')
	.controller('addController', function($scope, placesData) {
		$scope.addPlace = function(newPlace) {

			if ($scope.countryForm.$invalid) {
				alert('invalid, aborting aborting');
			} else {
				var place = angular.copy(newPlace);

				place.flag = $scope.flags[$scope.index];

				placesData.addPlace(place);
			}
		}

		$scope.flags = [
			"KRLXcPG.png",
			"GCDY97r.png",
			"dnlt7Mi.png",
			"sY6mBwm.png",
			"QV0omWR.png",
			"mfHutHR.png",
			"nFlK4pA.png"
		];

		$scope.index = 0;

		$scope.prev = function(){
			
			if ($scope.index === 0){
				$scope.index  = $scope.flags.length;	
			} else {
				$scope.index --;
			}
		}

		$scope.next = function(){
			if ($scope.index === $scope.flags.length - 1){
				$scope.index  = 0;	
			} else {
				$scope.index ++;
			}
		}

		$scope.newPlace = {
			cities: ['dummy']
		}

		$scope.addCity = function(city) {
			$scope.newPlace.cities.push(city);

			$scope.newCity = '';
		};

	});