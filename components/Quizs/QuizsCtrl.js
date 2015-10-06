angular.module('QuizApp')
	.controller('QuizsCtrl',  ['$scope', function ($scope) {

		$scope.quizs = [{
			id: 1,
			name: 'quiz1',
			numberQuestion: 3
		}, {
			id: 2,
			name: 'quiz2',
			numberQuestion: 10
		}, {
			id: 3,
			name: 'quiz3',
			numberQuestion: 5
		}, {
			id: 4,
			name: 'quiz4',
			numberQuestion: 10
		}]	
}])