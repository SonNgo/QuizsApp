angular.module('QuizApp')
	.factory('UserService', ['$q', '$http', 'api', function ($q, $http, api) {
		var o = {}

		o.getUser = function() {

			var url = api + '/users/1'
			//'Authorization: Token token=861af99a9dbf5e052b8b55cfc41e69d7'
			//var token = 'Token token=' + 


			var deferred = $q.defer();
			$http.get(url, {
				params: {
					'token': '4f099b89868a436074aa4519a4651133'
				}
			})
				.success(function  (data) {
          deferred.resolve(data);
				})
				.error(function  (data) {
          deferred.reject(data);
				})
			return deferred.promise;
		}

		return o;

	}]);