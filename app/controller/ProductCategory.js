app.controller("CategoryController", ['$scope', '$http', '$q', function(
  $scope,
  $http, $q) {
  $scope.categories = [];
  $scope.productCategoryController = function() {
    var d = $q.defer();
    $http.get('https://currybhari-view.herokuapp.com/productCategory').success(
      function(data) {
        d.resolve(data);
      });
    $scope.categories = d.promise;
  };
  $scope.productCategoryController();
}]);
