angular.module('QuizApp')
	.controller('UserProfileCtrl', ['$scope', 'PostService',  function ($scope, PostService){
	
			$scope.addPost = function  (post) {
				PostService.addPost(post);
				$scope.post = {};
			}
	}])