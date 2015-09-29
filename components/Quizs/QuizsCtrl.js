angular.module('QuizApp')
	.controller('QuizsCtrl',  ['$scope', 'PostService', function ($scope, PostService) {

			$scope.posts = PostService.posts;

}])