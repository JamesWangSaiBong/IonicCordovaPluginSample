'use strict'

app.controller("ActionSheetController", function($scope, $ionicPlatform, $cordovaActionSheet) {

	var deviceReady = false;
	
	$ionicPlatform.ready(function() {
		deviceReady = true;
	});
	
	$scope.selectedAction = "";
	
	$scope.openActionSheet = function() {
		if(deviceReady) {
			
			var options = {
				title: 'What do you want with this image?',
				buttonLabels: ['Share via Facebook', 'Share via Twitter'],
				addCancelButtonWithLabel: 'Cancel',
				androidEnableCancelButton : true,
				winphoneEnableCancelButton : true,
				addDestructiveButtonWithLabel : 'Delete it'
			};
			
			$cordovaActionSheet.show(options)
				.then(function(btnIndex) {
					switch(btnIndex) {
						case 1:
							$scope.selectedAction = "Delete it";
							break;
						case 2:
							$scope.selectedAction = "Share via Facebook";
							break;
						case 3:
							$scope.selectedAction = "Share via Twitter";
							break;
					};
				});
		};
	};
});