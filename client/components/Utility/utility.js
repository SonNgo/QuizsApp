angular.module('QuizApp')
.factory('sharedData', function($rootScope) {
	var sharedService = {};
	sharedService.data = 0;

	sharedService.get = function() {
		return this.data;
	}

	sharedService.set = function(data) {
		this.data = data;
		$rootScope.$broadcast('updateUserPoint');
	}

	return sharedService;
})