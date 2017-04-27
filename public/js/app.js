var frameApp = angular.module('frameApp',[]);

frameApp.controller('frameCtrl',['$scope',function($scope){

	$scope.init = function(){

		// console.log(window.location.href)

		// console.log(window)

	// 	if(window.frameElement.tagName=="IFRAME"){

	// 　　	console.lohg('foobar')

	// 　　}else{

	// 		console.log('nonono')

	// 	}

	// 	if(window.top != window.self){

	// 　　	console.log('inframe')

	// 　　}else{

	// 		console.log('notinframe')

	// 	}

	}

}])