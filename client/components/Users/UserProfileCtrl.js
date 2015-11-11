angular.module('QuizApp')
.controller('UserProfileCtrl', ['$scope', 'CurrentUser', 'sharedData', 'httpRequest', 'LocalService',
 function ($scope, CurrentUser, sharedData, httpRequest, LocalService){
	$scope.currentUser = CurrentUser.user();
	$scope.$on('handleBroadcast', function() {
		if($scope.currentUser) {
			$scope.currentUser.point += sharedData.get('point');
			if(sharedData.get('isFinished')) {
				httpRequest.update('/users', $scope.currentUser).then(function(result) {
					
				})
			}
		}
		
	})
}])