
angular.module('QuizApp', ['ui.router', 'ui-notification'])
	.constant('api', 'http://localhost:3000/api/v1')
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '',
					views: {
						'aside': {
							templateUrl: 'components/Users/user_profile.html',
							controller: 'UserProfileCtrl',
						},
						'content': {
							templateUrl: 'components/Subjects/Sub.html',
							controller: 'SubjectCtrl'
						}
					}
				})

				.state('home.quizs', {
					url: '/subjects/:subject',
					views: {
						'content@' : {
							templateUrl: 'components/Quizs/quizs.html',
							controller: 'QuizsCtrl'
						}
					}
				})

				.state('home.quizs.questions', {
					url: '/quizs/:quiz',
					views: {
						'content@': {
							templateUrl: 'components/Questions/questions.html',
							controller: 'QuestionsCtrl'
							
						}
					}
				})

			$urlRouterProvider.otherwise('/');	
		}
	])


