
app.factory('placesData', function(defaults, $http, $q) {


	var service = {
		getPlaces: function() {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: 'data/countries.json'
			}).success(function(data) {
				deferred.resolve(data);
			});

			return deferred.promise;
		},
		addPlace: function(place) {

			if (!place.flag) {
				place.flag = defaults.flag
			}

			placesVisited.push(place);
		}
	};

	return service;

});