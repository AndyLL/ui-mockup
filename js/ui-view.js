var app = angular.module('myAPP', []) 

app.directive('someView', function($stateProvider){
	$stateProvider.state('home', {
		template: "<h1>hello!</h1>"
	})
})