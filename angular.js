var app = angular.module('myApp', ['ngAnimate']);

app.controller('validateCtrl', function ($scope) {
    $scope.firstName = 'Harry';
    $scope.lastName = 'Porter';
    $scope.email = 'harryporter@gmail.com';
    $scope.nums = [1,2,3,4,'5 Or More'];
    $scope.reject = !$scope.accept;
});
