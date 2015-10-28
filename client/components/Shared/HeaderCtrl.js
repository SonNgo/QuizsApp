angular.module('QuizApp')
	.controller('HeaderCtrl',  ['$scope', function ($scope) {

		$scope.signupButton = function(){
			$('.ui.small.signup.modal')
        .modal('setting', 'transition', 'fade up')
  			.modal('show');	
		}


		$scope.loginButton = function(){
			$('.ui.small.login.modal')
        .modal('setting', 'transition', 'fade up')
  			.modal('show');	
		}

	}])