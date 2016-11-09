var app = angular.module("curryBhariApp", []);
app.controller("productSliderController",['$scope', function($scope) {
    $scope.getProducts = function () {
        return [{"Productname":"Khaman","Description":"Gujrati Special","Productname":"Sev","Description":"Indori Sev"}];
    };
}]);
