angular.module('QuizApp')
	.controller('LoginCtrl', ['$http', '$scope', '$state', 'Auth', function($http, $scope, $state, Auth){
		$scope.login = function () {
			Auth.login($scope.user)
				.then(function(){
					$state.reload()
				});


		$('.ui.small.login.modal')
			.modal('hide');
		}

	}])