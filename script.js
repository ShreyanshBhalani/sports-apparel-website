function OrderFormController($scope){

	$scope.services = [
		{
			name: 'Shirts',
            price: 550,
            quantity:0,
			active:false
		},{
			name: 'Tshirts',
            price: 450,
            quantity:0,
			active:false
		},{
			name: 'Shorts',
            price: 350,
            quantity:0,
			active:false
		},{
			name: 'TrackPants',
            price: 900,
            quantity:0,
			active:false
		},{
			name: 'Jackets',
            price: 800,
            quantity:0,
			active:false
		},{
			name: 'Shoes',
            price: 1000,
            quantity:0,
			active:false
		},
		{
			name: 'Tops',
            price: 320,
            quantity:0,
			active:false
		}
    ];
	
    $scope.increaseItemAmount = function(item) {
        item.quantity++;
        item.active= true;
    }

    $scope.decreaseItemAmount = function(item) {
        item.quantity--;
        if (item.quantity <= 0) {
            item.quantity = 0;
            item.active = false;
        } else {
            item.active = true;
        }
    }

	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price*s.quantity;
			}
		});

		return total;
    };
    
}

