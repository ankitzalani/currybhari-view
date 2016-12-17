angular.module('curryBhariApp').controller("adminProductsController", ['$scope', '$http', '$q', '$state', 'Products', 'Upload', 'Notification', '$stateParams',
    function($scope, $http, $q, $state, Products, Upload, Notification, $stateParams) {
        $scope.products = {
            data: []
        }

        $scope.file = {};

        $scope.mode = $stateParams.mode;

        $scope.productObj = $stateParams.mode==='add'?'':Products.productObj;

        $scope.getProducts = function() {
            var controller = this;
            Products.list(true).then(function(promise) {
                controller.products.data = promise.data;
            });
        };

        $scope.add = function() {
            var controller = this;
            Products.add($scope.productObj).then(function(data) {
                $state.go('adminProducts');
            });
        }

        $scope.view = function() {

        }

        $scope.setEditMode = function(prod) {
            var controller = this;
            Products.productObj = prod;
            $state.go('adminAddProduct', {
                mode: 'edit'
            });
        }

        $scope.edit = function(prod) {
            var controller = this;
            Products.edit(controller.productObj).then(function(data) {
                controller.getProducts();
            });
        }

        $scope.delete = function(product) {
            var controller = this;
            Products.delete(product._id).then(function(data) {
                Notification.success({
                    message: product.name + ' deleted',
                    delay: 1000,
                    positionY: 'bottom',
                    positionX: 'right'
                });
                controller.getProducts();
            });
        }

        $scope.submit = function() { //function to call on form submit
            var controller = this;
            $scope.upload(controller.file); //call upload function
        }

        $scope.upload = function(file) {
            var controller = this;
            Upload.upload({
                url: '/product/image/upload', //webAPI exposed to upload the file
                data: {
                    file: file
                } //pass file as data, should be user ng-model
            }).then(function(resp) { //upload function returns a promise
                if (resp.data.error_code === 0) { //validate success
                    $state.go('adminProducts');

                    controller.productObj.image = "./images/uploads/" + resp.data.file_name;
                    Products.add($scope.productObj).then(function(data) {
                        $state.go('adminProducts');
                    });
                } else {
                    //error
                }
            }, function(resp) { //catch error
                console.log('Error status: ' + resp.status);
            }, function(evt) {
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                controller.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
            });
        };

        $scope.getProducts();
    }
]);
