angular.module('curryBhariApp')
  .controller("sliderController", ['$scope', '$http', '$q','SliderService', function(
  $scope,
  $http, $q, SliderService) {

  $scope.sliders = [];

  var getSliders = function() {
      SliderService.list().then(function(promise){
          $scope.sliders = promise.data;
      });
  };

  getSliders();
}]);
