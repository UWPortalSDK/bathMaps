angular.module('portalApp')
.controller('bathMapsCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Bathroom 1',
			ratings: '3.5'
		},
		{
			title:'Poopstation 2.0',
			ratings: '4.7'
		},
		{
			title:'Flush ya lil nasty',
			ratings: '2'
		},
		{
			title:'piss bowl',
			ratings: '3.6'
		},
		{
			title:'pisscity',
			ratings: 'DNE'
		},
		{
			title:'wash yo hands',
			ratings: 'N/A'
		}
	];
    
    $scope.ready = true;
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('bathMapsMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('bathMapsDetails.html', 2);
	};
}]);