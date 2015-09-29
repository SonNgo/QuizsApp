
angular.module('QuizApp', ['ui.router'])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/',
					views: {
						'aside': {
							templateUrl: 'components/Users/user_profile.html',
							controller: 'UserProfileCtrl'
						},
						'content': {
							templateUrl: 'components/Quizs/quizs.html',
							controller: 'QuizsCtrl'
						}
					}
				})

			$urlRouterProvider.otherwise('/');	
		}
	])
	