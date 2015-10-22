
angular.module('QuizApp', ['ui.router', 'ui-notification'])
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
							resolve: {
								user: function(UserService) {
									return UserService.getUser();
								}
							}
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
							templateUrl: 'components/Quizs/quizs.html',
							controller: 'QuizsCtrl'
						}
					}
				})

				.state('home.quizs.questions', {
					url: '/:quiz',
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
	