angular.module('emcApp').controller('listingController', 
	['$scope', '$timeout', 'limitResults', 'placesData', '$location', function($scope, $timeout, limitResults, data, $location) {
	var companyName = 'Microsoft';

	$scope.favoritePlace = 'India';

	$scope.limitResults = limitResults;

	$scope.person = {
		firstName: 'Steve',
		lastName: 'Jobs'
	}

	$scope.showMore = function(item) {
		item.showMore = true;
	}

	$scope.selectCountry= function(country){
		data.selectedCountry = country;

		$location.url('/details');
	}

	data.getPlaces(function(data) {
		$scope.person.placesVisited = data;
	});

}]);