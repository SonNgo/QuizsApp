angular.module('QuizApp')
	.controller('LoginCtrl', ['$http', '$scope', function($http, $scope){
		$scope.login = function () {
			


		$('.ui.small.login.modal')
			.modal('hide');
		}

	}])