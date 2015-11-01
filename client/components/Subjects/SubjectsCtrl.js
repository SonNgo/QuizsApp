angular.module('QuizApp')
	.controller('SubjectCtrl', ['$scope', 'SubjectService', function($scope, SubjectService){
	  SubjectService.getAll()
	  	.then(function (result) {
	  		$scope.subjects = result.data;
	  		console.log($scope.subjects);
	  	})
	  	.then(function () {
	  		console.log('failed')
	  	})
		
	}])