angular.module('QuizApp')
	.controller('HeaderCtrl', ['$scope', 'CurrentUser', 'LocalService', '$state', function ($scope, CurrentUser, LocalService, $state) {
		
		$scope.currentUser = function() {
			console.log(CurrentUser.user());
			if(CurrentUser.user())	return true
			return false;
		}

		$scope.signupButton = function(){
			$('.ui.small.signup.modal')
        .modal('setting', 'transition', 'fade up')
  			.modal('show');
  			$state.reload;
		}


		$scope.loginButton = function(){
			$('.ui.small.login.modal')
        .modal('setting', 'transition', 'fade up')
  			.modal('show');	
  			$state.reload;
		}

		$scope.logout = function() {
			LocalService.unset();
			console.log($scope.currentUser());
			$state.reload();
		}

	}])