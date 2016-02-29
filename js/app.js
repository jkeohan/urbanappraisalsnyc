var myApp = angular.module("myApp", [])

myApp.controller('mainCtrl', ['$scope', function($scope){ //['$scope'] it needs to be  a string here
'use strict'
		$scope.carousel = [
				{image: "images/clinton-hill-brooklyn-townhouse-in-fall.jpg", tagline: "Estate Planning", lis:["Estate Settlement","Probate","Estate Tax"]},
				{image: "images/clinton-hill-brooklyn-townhouse-in-fall.jpg", tagline: "Bankruptcy", lis:["Estate Settlement","Probate","Estate Tax"]}
			]
}])





