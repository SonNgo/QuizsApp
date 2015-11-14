angular.module('QuizApp')
.controller('QuestionsCtrl', ['$scope', 'Notification', 'sharedData', 'QuestionsService', '$stateParams',
	function ($scope, Notification, sharedData, QuestionsService, $stateParams) {

	


	QuestionsService.getByQuiz($stateParams.subject, $stateParams.quiz)
		.then ( function  (result) {
			$scope.questions = result.data;

		})


	$scope.indexQuestion = 0;
	$scope.currentQuestion = function (index) {
		if ($scope.indexQuestion != index) return false;
		else return true;
	}

	$scope.checked = function (index) {
		$scope.answer = index;
	}

	$scope.checkResult = function  (index) {

		$scope.questions[index].done = true;
		if (($scope.answer != null) && ($scope.questions[index].answers[$scope.answer].is_correct)) {
			console.log(index + ' ' + $scope.answer);
			var point = $scope.questions[index].point;
			updateUserPoint(point);
			Notification.success('CORRECT. +' + point + ' point');
		} else {
			Notification.error('NOT CORRECT');
		}

		if(index == $scope.questions.length - 1) {
			sharedData.set('isFinished', true);
		}

		$scope.indexQuestion = index+1;
	}

	function updateUserPoint(point) {
		sharedData.set('point', point);
	}

}])