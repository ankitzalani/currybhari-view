angular.module('curryBhariApp')
  .controller("productDetailsController", ['$scope', '$http', '$q', 'Products',
    function(
      $scope,
      $http, $q, Products) {
      $scope.product = [];

      var getProduct = function(id) {
        Products.getProduct(id).then(function(promise) {
          $scope.product = promise.data;
        });
      };

      getProduct(1);
    }
  ]);
