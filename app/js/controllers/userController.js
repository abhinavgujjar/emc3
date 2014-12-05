angular.module('emcApp').controller('userController',
	 function($scope, goog) {

		
		goog.ready.then(function(){
			$scope.ready = true;
		});

		$scope.signIn = function(){
			goog.signIn();
		}

	});