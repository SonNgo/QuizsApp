angular.module('QuizApp')
	.factory('UserService', ['$q', '$http', function($q, $http) {
		var o = {}
		var baseUrl = 'http://localhost:3000/api/v1/users'	

		
		o.getUser = function() {

			//var url = baseUrl + '/' + id.to_string
			//'Authorization: Token token=861af99a9dbf5e052b8b55cfc41e69d7'
			//var token = 'Token token=' + 


			var deferred = $q.defer();
			$http.get(baseUrl)
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