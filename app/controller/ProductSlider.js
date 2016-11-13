var app = angular.module("curryBhariApp", []);
app.controller("productSliderController", ['$scope', '$http', '$q', function(
  $scope,
  $http, $q) {
  $scope.product = [];
  $scope.getProducts = function() {
    var prods = $http({
      method: 'GET',
      url: 'http://currybhari-view.herokuapp.com/productDetails'
    });
    console.log(prods);
    $scope.products = prods || [{
      "productId": 1,
      "name": "a",
      "description": "testing",
      "rate": 100,
      "image": "./images/home/1.jpg"
    }];
  };
  $scope.getProducts();
}])

app.controller("productSliderController", ['$scope', function($scope) {
  $scope.getProducts = function() {
    return [{
      "name": "Khaman23131"
    }];
  };
}]);
