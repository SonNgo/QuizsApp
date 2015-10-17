angular.module('QuizApp')
	.controller('UserProfileCtrl', ['$scope', 'user',  function ($scope, user){
		$scope.user = user[0];
		console.log(user);
		
	}])