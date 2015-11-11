angular.module('QuizApp')
.factory('sharedData', function($rootScope) {
	var sharedService = {};
	sharedService.data = {};

	sharedService.get = function(key) {
		return this.data[key];
	}

	sharedService.set = function(key, value) {
		this.data[key] = value;
		$rootScope.$broadcast('handleBroadcast');
	}

	return sharedService;
})

.factory('httpRequest', function($http, api) {
	return {
		update: function(path, object) {
			return $http.put(api + path + '/' + object.id, object);
		}
	}
})