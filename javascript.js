angular.module('portalApp')
.controller('bathMapsCtrl', ['$scope', function ($scope) {
	
    $scope.rating = {
     	value: '5'   
    };
    
    $scope.portalHelpers.invokeServerFunction('getAvg', {name: 'Bathroom 1'}).then(function(value) {
        $scope.items.value[0].ratings = value;
    });
    
	// mock data
	$scope.items = {value: [
		{
			title:'Bathroom 1',
			ratings: 'x',
            distance: '20'
		},
		{
			title:'Bathroom 2',
			ratings: 'x',
            distance: '40'
		},
		{
			title:'Bathroom 3',
			ratings: 'x',
            distance: '70'
		},
		{
			title:'Bathroom 4',
			ratings: 'x',
            distance: '80'
		},
		{
			title:'Bathroom 5',
			ratings: 'x',
            distance: '100'
		},
		{
			title:'Bathroom 6',
			ratings: 'x',
            distance: '115'
		}
	]};
    
    $scope.ready = true;
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('bathMapsMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showMap = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('bathMapsMap.html', 2);
	};
    
    // This function is called when the user submits a bathroom rating
    $scope.submitRating = function(title) {
     	$scope.portalHelpers.invokeServerFunction('addRating', {
         	name: title,
            value: $scope.rating.value}).then(function(new_rating) {
            $scope.items.value[0].ratings = new_rating;
        });
        alert('Thanks for submitting a rating!');
        $scope.portalHelpers.showView('bathMapsMain.html', 1);
    };
}]);