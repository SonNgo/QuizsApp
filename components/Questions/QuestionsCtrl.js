angular.module('QuizApp')
	.controller('QuestionsCtrl', ['$scope', 'notify', function ($scope, notify) {
		$scope.userAnswer = '0';
		$scope.questions = [{
			id: 1,
			description: "Nhiet do soi cua nuoc la:",
			point: 10,
			answers: [{
				option: "A. 100",
				correct: '0'
			}, {
				option: "B. 50",
				correct: '1'
			}, {
				option: "C. 10",
				correct: '2'
			}, {
				option: "D. 200",
				correct: '3'
			}]
		}]

		

		$scope.checkResult = function  (index) {
			if ($scope.questions[index].userAnswer === '0') 
				 notify('CORRECT. You have been added ' + $scope.questions[index].point + ' point');
			else
				notify('WRONG. Try again');
		}
	}])