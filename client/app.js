
angular.module('QuizApp', ['ui.router', 'ui-notification'])
	.constant('api', 'http://localhost:3000/api/v1')
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		'NotificationProvider',
		function ($stateProvider, $urlRouterProvider, NotificationProvider) {
			$stateProvider
				.state('home', {
					url: '/',
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
			 NotificationProvider.setOptions({
			 	  positionX: 'center',
          positionY: 'top'
			 })
		}
	])

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '907948839295498',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));