app.controller("CategoryController", ['$scope', '$http', '$q', function(
  $scope,
  $http, $q) {
    $scope.categories = [];

    $scope.getCategories = function() {
      var d = $q.defer();
      $http.get('https://currybhari-view.herokuapp.com/productCategories').success(
        function(data) {
          $scope.categories = data;
          d.resolve(data);
        });
      d.promise;
    };
    $scope.getCategories();
}]);
