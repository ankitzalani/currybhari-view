var app = angular.module("curryBhariApp", []);

app.controller("ProductController", ['$scope','Products', function($scope, Products) {
    $scope.products = Products.list();

    $scope.categories = Products.categories();
}]);
