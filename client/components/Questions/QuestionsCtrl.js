angular.module('QuizApp')
	.controller('QuestionsCtrl', ['$scope', 'Notification', function ($scope, Notification) {
	
		$scope.questions = [{
			id: 1,
			description: "Nhiệt độ sôi của nước là:",
			point: 5,
			done: false,
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
			}, ]
		}, {
			id: 2,
			description: "Nhà bác học Newton bị quả gì rơi trúng đầu để rồi phát minh ra định luật vạn vật hấp dẫn: ",
			point: 5,
			done: false,
			answers: [{
				option: "A. Lựu",
				correct: '1'
			}, {
				option: "B. Bưỏi",
				correct: '2'
			}, {
				option: "C. Táo",
				correct: '0'
			}, {
				option: "D. Mít",
				correct: '3'
		}]
	}, {
			id: 3,
			description: "Ai là người phát minh ra thuyết tưong đối:",
			point: 10,
			done: false,
			answers: [{
				option: "A. Einstein",
				correct: '3'
			}, {
				option: "B. Nobel",
				correct: '1'
			}, {
				option: "C. Newton",
				correct: '2'
			}, {
				option: "D. Lượng",
				correct: '0'
		}]
	}];

		
		$scope.indexQuestion = 0;
		$scope.currentQuestion = function (index) {
			if ($scope.indexQuestion != index) return false;
			else return true;
		}

		$scope.checkResult = function  (index) {
			
			$scope.questions[index].done = true;

			if ($scope.questions[index].userAnswer === '0') 
				 Notification.success('CORRECT. +' + $scope.questions[index].point + ' point');
			else
				Notification.error('NOT CORRECT');

			$scope.indexQuestion = index+1;
		}
	}])