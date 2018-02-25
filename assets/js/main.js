// angularjs app
var btc = angular.module("codelife_btc", ["ngRoute"]);


// news ccontroller
btc.controller('controller_news', function($scope,$http){

	$http.get('assets/data/data.json')
	.then(function(response){
		console.log(response);
		$scope.news = response.data;
	});

	$scope.$ = $;

	// view news
	$scope.viewpost = function(item){
		$scope.post_id = item.currentTarget.getAttribute("data-id");
		console.log($scope.post_id);
		$("#news_modal").modal('show');

	}
});