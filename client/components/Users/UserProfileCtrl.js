angular.module('QuizApp')
	.controller('UserProfileCtrl', ['$scope', 'user',  function ($scope, user){
		$scope.user = user;
		console.log(user);
		
	}])