angular.module('QuizApp')
.controller('UserProfileCtrl', ['$scope', 'CurrentUser', 'sharedData', function ($scope, CurrentUser, sharedData){
	$scope.currentUser = CurrentUser.user();
	$scope.$on('updateUserPoint', function() {
		if($scope.currentUser) {
			$scope.currentUser.point += sharedData.get();
		}
	})
}])