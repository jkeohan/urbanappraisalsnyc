var myApp = angular.module("myApp", ['ngAnimate','ui.router'])

// myApp.run(["$rootScope", "$window", '$location', function($rootScope, $window,  $location) {

//     $rootScope.$on('$routeChangeStart', function(evt, absNewUrl, absOldUrl){
//         $window.scrollTo(0,0);    //scroll to top of page after each route change
// }}])

myApp.run(function($rootScope, $state, $timeout, $window) {
    $rootScope.$on('$stateChangeError', function() {
        $state.go("/error");
    });
    $rootScope.$on('$stateChangeStart', function() {
        $rootScope.isLoading = true;
   
    });
    $rootScope.$on('$stateChangeSuccess', function() {
    	//timeout placed here so that it runs after the transistion has been kicked off
    	//placing it in $stateChageStart would cause it to first load when the page renders
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 1000);
      //.scrollTo(0,0); 
    });
})


myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$urlRouterProvider.when('/services','/services/bankruptcy');
	$urlRouterProvider.when('/appraisals','/appraisals/single');
	$stateProvider//this is a service
		.state('home', {
			url:'/',
		    templateUrl : 'partials/home.html',
		    controller: ''
		})
		.state('appraisals', {
			url:'/appraisals',
				templateUrl : 'partials/appraise.html',
				controller: 'appraiseCtrl'
		})
		.state('appraisals.item', {
			url:'/:item',
			 templateUrl: function(e) {
			 	console.log(e)
        return 'partials/appraise.' + e.item + ".html"
      },
    	controller: 'appraiseCtrl'
		})
		.state('services', {
			url:'/services',
			templateUrl: 'services/services.html',
			controller: 'servicesCtrl'
		})
		.state('services.item', {
			url:'/:item',
			 templateUrl: function(e) {
			 	//console.log(e)
        return 'services/' + e.item + ".html"
      },
      controller: 'servicesCtrl'
		})

		// .state('country', {
		// 	url:'/countries/:country',
		//   	templateUrl : 'app/country/country.html',
		//     controller : 'CountryCtrl',
		//     resolve: {
		//     	countryInfo: ['$stateParams', 'ccCountry', function($stateParams, ccCountry){
		//     		console.log($stateParams);
		//     		return ccCountry($stateParams.country);
		//     	}]
	 //    	}
		// })
		// .state('error', {
		// 	url:'/error',
		// 	templateUrl: 'app/error/error.html'
		// });
})

myApp.controller('mainCtrl', ['$scope', function($scope){ //['$scope'] it needs to be  a string here
'use strict'
		$scope.carousel = [
				{image: "images/clinton-hill-brooklyn-townhouse-in-fall.jpg", tagline: "Estate Planning", lis:["Estate Settlement","Probate","Estate Tax"]},
				{image: "images/clinton-hill-brooklyn-townhouse-in-fall.jpg", tagline: "Bankruptcy", lis:["Estate Settlement","Probate","Estate Tax"]}
			]
}])

myApp.controller('appraiseCtrl', ['$scope','$stateParams','$state', function($scope,$stateParams,$state ){
	var gradient = "linear-gradient(0deg, rgba(23, 23, 23, 0.5), rgba(23,23,23,0.5))"
	$scope.property = [
		{name: "Single Family",image:"../images/home1.jpg",shorturl:"single"}, 
		{name: "Multi-Family",image: "../images/clinton-hill-brooklyn-townhouse-in-fall.jpg",shorturl:"multi"},
		{name: "Cooperatives/Condominiums",image:"../images/coop.jpg",shorturl:"coop"},
		{name: "Vacant Land",image:"../images/vacantland.png",shorturl:"vacant"}
	]
	$scope.selectItem = function(selectedItem) {	
	  	angular.forEach($scope.property, function(d,i){
	  	 d.selected = false;
	  	 if(selectedItem === d.shorturl) {
	  	 	d.selected = true;
	  	 	$('.topimg').css("background-image", (gradient + ",url(" + d.image + ")"))
	  	 	$('.desc-wrapper p').html(d.name)
	  	 	//console.log(true)
	  	 }
	  })
	}
	$scope.selectItem($state.params.item)
}])

myApp.controller('servicesCtrl', ['$scope','$stateParams','$state', function($scope,$stateParams,$state) {

	var gradient = "linear-gradient(0deg, rgba(23, 23, 23, 0.5), rgba(23,23,23,0.5))"
	$scope.services = [ 
		{name:"Bankruptcy",shorturl:"bankruptcy"},
		{name:"Estate Planning/Settlement",shorturl:'estateplanning'}, 
		{name:"Divorce",shorturl:'divorce'},
		{name:"Pre-sale/Pre-purchase",shorturl:"presale"},
		{name:"PMI Removal",shorturl:'pmi'},
		{name:"Tax Grievance",shorturl:"taxgrievance"}, 
		{name:"Medicaid/Immigration",shorturl:'medicaid'}, 
		{name: "Mortgage Lending",shorturl:'mortgagelending'}
		]

	// var count_services = 0;
	// if(count_services === 0) { 
	//  //$state.go('services.item', { item: 'estateplanning' }) 
	//  	$scope.default = $scope.services.filter(function(d,i){
 // 		if(d.shorturl == "bankruptcy") { d.selected = true }
 // 	 	count_services ++
	// 	})
	// }
	$scope.selectItem = function(selectedItem) {
		console.log(selectedItem)
		//if(selectedItem.toLowerCase().split("")[0] === 'estate') { selectedItem.selected = true}
		
	  	angular.forEach($scope.services, function(d,i){
	  	 d.selected = false;
	  	 if(selectedItem === d.shorturl) {
	  	 	console.log(d)
	  	 	d.selected = true;
	  	 	
	  	 //	$('.topimg').css("background-image", (gradient + ",url(" + d.image + ")"))
	  	 	$('.desc-wrapper p').html(d.name)
	  	 	//console.log(true)
	  	 	//console.log(selectedItem.selected)
	  	 }
	  })
	 //}
	}
	$scope.selectItem($state.params.item)
}])




