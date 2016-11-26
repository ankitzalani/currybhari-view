angular.module('curryBhariApp')
  .controller("productDetailsController", ['$stateParams','$scope', '$http', '$q', 'Products',
    function($stateParams,
      $scope,
      $http, $q, Products) {
      $scope.product = [];
      $scope.id = $stateParams.id;

      var getProduct = function(id) {
        Products.getProduct(id).then(function(promise) {
          $scope.product = promise.data;
        });
      };

      getProduct($scope.id);
    }
  ]);
