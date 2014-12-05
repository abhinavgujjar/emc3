app.factory('placesData', function(defaults, $http, $q) {


	var service = {
		getPlaces: function() {
			var deferred = $q.defer();

			$http.get('https://api.parse.com/1/classes/places', {
				headers: {
					'X-Parse-Application-Id': 'U5IchxaA05dCiTOsdr3wawO67fwPDmfQJsCUVCa6',
					'X-Parse-REST-API-Key': 'PEl224ONusWRJLsK5mA3QxovfKbwbiSKESUffXv4',
				}
			}).success(function(data) {
				deferred.resolve(data.results);
			});

			return deferred.promise;
		},
		addPlace: function(place) {

			if (!place.flag) {
				place.flag = defaults.flag
			}

			$http.post('https://api.parse.com/1/classes/places', place, {
				headers: {
					'X-Parse-Application-Id': 'U5IchxaA05dCiTOsdr3wawO67fwPDmfQJsCUVCa6',
					'X-Parse-REST-API-Key': 'PEl224ONusWRJLsK5mA3QxovfKbwbiSKESUffXv4',
				}
			});
		}
	};

	return service;

});