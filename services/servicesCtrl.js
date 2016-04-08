myApp.controller('servicesCtrl', ['$scope','$stateParams','$state', function($scope,$stateParams,$state) {
	console.log("services")
	$scope.services = [ {name:"Estate Planning/Settlement"}, {name:"Bankruptcy"}, {name:"Pre-sale/Pre-purchase"},
	{name:"Tax Grievance"}, {name:"Medicaid"}, {name:"PMI Removal"},{name: "Mortgage Lending"}, 
	{name:"Consulting"}]

	console.log($scope.services)
	$scope.selectItem = function(selectedItem) {	
		console.log(selectedItem)
		//if(selectedItem === 'estate') { selectedItem.selected = true}
		//selectedItem.name.toLowerCase().replace(" ","-")
	  	angular.forEach($scope.services, function(d,i){
	  	 d.selected = false;
	  	 console.log(selectedItem, d)
	  	 if(selectedItem === d) {
	  	 	console.log(d)
	  	 	selectedItem.selected = true;
	  	 	$('.topimg').css("background-image", (gradient + ",url(" + d.image + ")"))
	  	 	$('.desc-wrapper p').html(d.name)
	  	 	//console.log(true)
	  	 	console.log(selectedItem.selected)
	  	 }
	  })
	 //}
	}
}])

// myApp.controller('servicesCtrl', ['$scope','$stateParams','$state', function($scope,$stateParams,$state) {
// 	$scope.services = [ {name:"Estate Planning/Settlement"}, {name:"Bankruptcy"}, {name:"Pre-sale/Pre-purchase"},
// 	{name:"Tax Grievance"}, {name:"Medicaid"}, {name:"PMI Removal"},{name: "Mortgage Lending"}, 
// 	{name:"Consulting"}]

// 	$scope.selectItem = function(selectedItem) {	
// 		if(selectedItem === 'estate') { selectedItem.selected = true}
// 		//selectedItem.name.toLowerCase().replace(" ","-")
// 	  	angular.forEach($scope.property, function(d,i){
// 	  	 d.selected = false;
// 	  	 //console.log(selectedItem, d)
// 	  	 if(selectedItem === d) {
// 	  	 	selectedItem.selected = true;
// 	  	 	$('.topimg').css("background-image", (gradient + ",url(" + d.image + ")"))
// 	  	 	$('.desc-wrapper p').html(d.name)
// 	  	 	//console.log(true)
// 	  	 }
// 	  })
// 	 //}
// 	}
// }])
