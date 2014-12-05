angular.module('emcApp')
	.controller('detailsController', function($scope, placesData, $routeParams) {
		$scope.item = placesData.selectedCountry;

		var countryId = $routeParams.countryId;
		console.log('country Id ' + countryId);

	});