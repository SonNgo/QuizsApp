angular.module('QuizApp')
	.controller('UserProfileCtrl', ['$scope',  function ($scope){
		$scope.user = {
			id: 1,
			name: "Nguyen Trong Luong",
			description: "I am Superman",
			point: 0
		}

		

	}])