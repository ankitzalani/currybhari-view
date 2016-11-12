app.controller("CategoryController", ['$scope', '$http', '$q', function(
  $scope,
  $http, $q) {
  $scope.categories = [];
  $scope.productCategoryController = function() {
    var prods = $http({
      method: 'GET',
      url: 'http://currybhari-view.herokuapp.com/productDetails'
    });
    $scope.categories = [{
      "productCategory": "P-1",
      "categoryProductName": "Mithai",
    }];
  };
  $scope.productCategoryController();
}]);
