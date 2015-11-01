angular.module('QuizApp')
	.controller('LoginCtrl', ['$http', '$scope', '$state', 'Auth', 'Notification', function($http, $scope, $state, Auth, Notification){
		$scope.login = function () {
			Auth.login($scope.user)
				.then(function(){
					$state.reload()
					Notification.success("Ban da dang nhap thanh cong ")
				});


		$('.ui.small.login.modal')
			.modal('hide');
		}

	}])