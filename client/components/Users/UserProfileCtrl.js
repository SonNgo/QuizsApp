angular.module('QuizApp')
	.controller('UserProfileCtrl', ['$scope', 'CurrentUser',  function ($scope, CurrentUser){
			$scope.currentUser = CurrentUser.user();
		console.log(CurrentUser.user());
		
	}])