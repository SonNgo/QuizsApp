angular.module('QuizApp')
	.factory('HeaderService', ['$q', '$http', 'api', function  ($q, $http, api) {
		var o = {}
		o.sendData = function  (user) {
			user = JSON.stringify(user);
			console.log(user);
			var url = api+'/users'
			$http.post(url, user)
				.success(function  (data, status) {
					console.log(status);
				})
		}
		return o;

	}])