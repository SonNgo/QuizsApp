angular.module('QuizApp')
	.factory('HeaderService', ['$q', '$http', 'api', 'Notification', function  ($q, $http, api, Notification) {
		var o = {}
		o.sendData = function  (user) {
			user = JSON.stringify(user);
			console.log(user);
			var url = api+'/users'
			$http.post(url, user)
				.success(function  (data, status) {
					console.log(status);
					Notification.success("You sign up successfully");
				})
		}
		return o;

	}])