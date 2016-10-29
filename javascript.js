angular.module('portalApp')
.controller('bathMapsCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Bathroom 1',
			ratings: '3.5',
            distance: '15'
		},
		{
			title:'Bathroom 2',
			ratings: '4.7',
            distance: '15'
		},
		{
			title:'Bathroom 3',
			ratings: '2',
            distance: '15'
		},
		{
			title:'Bathroom 4',
			ratings: '3.6',
            distance: '15'
		},
		{
			title:'Bathroom 5',
			ratings: 'No ratings yet',
            distance: '14'
		},
		{
			title:'Bathroom 6',
			ratings: 'No ratings yet',
            distance: '15'
		}
	];
    
    $scope.ready = true;
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('bathMapsMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showMap = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('bathMapsMap.html', 2);
	};
}]);