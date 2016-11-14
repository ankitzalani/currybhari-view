var app = angular.module("curryBhariApp", []);

app.controller("productSliderController", ['$scope', '$http', '$q', function(
  $scope,
  $http, $q) {
  $scope.products = [];

  $scope.getProducts = function() {
    var d = $q.defer();
    $http.get('https://currybhari-view.herokuapp.com/productDetails').success(
      function(data) {
        $scope.products = data;
        d.resolve(data);
      });
    d.promise;
  };
  $scope.getProducts();
}]);
