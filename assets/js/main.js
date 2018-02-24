var btc = angular.module("codelife_btc", ["ngRoute"]);


// news ccontroller
btc.controller('controller_news', function($scope,$http){
	$http({
		method: 'POST', 
		url: '../assets/data/data.json', 
		dataType:"json", 
		contentType:"application/json; charset=utf-8"})
	.then(function(response){
		console.log(response);
		$scope.news = response
	})
});