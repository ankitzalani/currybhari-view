var app = angular.module("curryBhariApp", []);
app.controller("productSliderController", ['$scope', '$http', '$q', function(
  $scope,
  $http, $q) {
  $scope.products = [];

  $scope.getProducts = function() {
    var d = $q.defer();
    $http.get('https://currybhari-view.herokuapp.com/productDetails').success(
      function(data) {
        d.resolve(data);
      });
    $scope.categories = d.promise();
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
