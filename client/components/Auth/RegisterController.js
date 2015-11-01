angular.module('QuizApp')
	.controller('RegisterCtrl', ['$scope', '$state', 'Auth', 'Notification', function ($scope, $state, Auth, Notification) {
		$scope.register = function () {
			Auth.register($scope.user)
				.then(function(){
					$state.reload();
					Notification.success("Ban da dang ky thanh cong");
				});

			$('.ui.small.signup.modal')
				.modal('hide');	
		}
	}])