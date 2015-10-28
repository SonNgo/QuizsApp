angular.module('QuizApp')
	.controller('UserProfileCtrl', ['$scope', 'getUser',  function ($scope, getUser){
		if (getUser.status == "ok")
			$scope.currentUser = getUser.data;
		else 
			$scope.currentUser = null;
		console.log(getUser);
		
	}])