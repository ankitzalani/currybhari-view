angular.module('curryBhariApp').controller("adminProductsController", ['$scope', '$http', '$q', '$state', 'Products', function($scope, $http, $q, $state, Products) {

    $scope.products = [];

    $scope.productObj = {
        name: '',
        description: '',
        rate: '',
        image: '',
        otherImages: []
    };

    $scope.getProducts = function() {
        var controller = this;
        Products.list(true).then(function(promise) {
            controller.products = promise.data;
        });
    };

    $scope.add = function() {
        var controller = this;
        Products.add(productObj).then(function(data) {
            controller.getProducts();
        });
    }

    $scope.view = function() {

    }

    $scope.edit = function() {
        var controller = this;
        Products.edit(productObj).then(function(data) {
            controller.getProducts();
        });
    }

    $scope.delete = function(product) {
        var controller = this;
        Products.delete(product._id).then(function(data) {
            controller.products = controller.products.filter(function(obj) {
                return product._id !== obj._id;
            });
        });
    }

    $scope.getProducts();
}]);
