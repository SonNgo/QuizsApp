angular.module('QuizApp')
	.controller('HeaderCtrl',  ['$scope', 'HeaderService', function ($scope, HeaderService) {

		$scope.user = {};


		$scope.formSubmit = function(){
			HeaderService.sendData($scope.user)
		}






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