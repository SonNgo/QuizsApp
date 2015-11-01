angular.module('QuizApp')
	.factory('SubjectService', function($http, api){
		return {
			getAll: function(){
				console.log(api);
				return $http.get(api+'/subjects')
			}
		}
	})