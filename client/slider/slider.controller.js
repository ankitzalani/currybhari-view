angular.module('curryBhariApp')
  .controller("productSliderController", ['$scope', '$http', '$q','Products', function(
  $scope,
  $http, $q, Products) {

  $scope.products = [];

  var getProducts = function() {
      Products.list().then(function(promise){
          $scope.products = promise.data;
      });
  };

  getProducts();
}]);
