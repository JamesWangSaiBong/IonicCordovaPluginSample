
app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('actionSheet', {
			url: '/action-sheet',
			templateUrl: 'views/action-sheet.html',
			controller: "ActionSheetController"
		})

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/tab/dash');

});
