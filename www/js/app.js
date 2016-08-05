var app = angular.module('starter', ['ionic']);
var recognition;

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.controller('TestController', function ($scope, $ionicPlatform) {
	$scope.resultText = new webkitSpeechRecognition();
	$scope.resultText.onresult = function(event) {
		console.log(event.results[0][0].transcript)
    };
	$scope.sepeak = function () {
		$scope.resultText.start();
	};
});