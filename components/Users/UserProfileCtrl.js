angular.module('QuizApp')
	.controller('UserProfileCtrl', ['$scope',  function ($scope){
	
			$scope.addPost = function  (post) {
				$scope.post = {};
			}
	}])