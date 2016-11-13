app.controller("CategoryController", ['$scope', '$http', '$q', function(
  $scope,
  $http, $q) {
  $scope.categories = [];
  $scope.productCategoryController = function() {
    var prods = $http({
      method: 'GET',
      url: 'https://currybhari-view.herokuapp.com/productDetails'
    });
    console.log(prods);
    $scope.categories = prods;
  };
  $scope.productCategoryController();
}]);
