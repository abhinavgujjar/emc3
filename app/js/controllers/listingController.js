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

	$scope.addFavorite = function(item){
		$scope.$emit('favorite:add', item);
	}

	data.getPlaces().then(function(data) {
		$scope.person.placesVisited = data;
	});

}]);