angular.module('emcApp').controller('listingController',
	['$scope', '$timeout', 'limitResults', 'placesData', function($scope, $timeout, limitResults, data) {
		var companyName = 'Microsoft';

		$scope.favoritePlace = 'India';

		$scope.limitResults = limitResults;

		$scope.person = {
			firstName: 'Steve',
			lastName: 'Jobs'
		}

		$scope.showMore = function(item){
			item.showMore = true;
		}

		$scope.person.placesVisited = data.getPlaces();

	}]);