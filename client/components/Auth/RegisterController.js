angular.module('QuizApp')
	.controller('RegisterCtrl', ['$scope', '$state', 'Auth', function ($scope, $state, Auth) {
		$scope.register = function () {
			Auth.register($scope.user)
				.then(function(){
					$state.reload();
				});

			$('.ui.small.signup.modal')
				.modal('hide');	
		}
	}])