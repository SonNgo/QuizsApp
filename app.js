
angular.module('QuizApp', ['ui.router'])
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
							controller: 'UserProfileCtrl'
						},
						'content': {
							templateUrl: 'components/Subject/Sub.html',
						}
					}
				})

				.state('home.quizs', {
					url: '/:subjectName',
					views: {
						'content@' : {
							templateUrl: 'components/Quizs/quizs.html'
						}
					}
				})

				.state('home.quizs.questions', {
					url: '/:quizNumber',
					views: {
						'content@': {
							templateUrl: 'components/Questions/questions.html',
							
						}
					}
				})

			$urlRouterProvider.otherwise('/');	
		}
	])
	