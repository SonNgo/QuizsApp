angular.module('QuizApp')
	.controller('HeaderCtrl',  ['$scope', function ($scope) {

		$scope.signup = function(){
			$('.ui.small.signup.modal')
        .modal('setting', 'transition', 'fade up')
  			.modal('show');	
		}


		$scope.login = function(){
			$('.ui.small.login.modal')
        .modal('setting', 'transition', 'fade up')
  			.modal('show');	
		}

	}])