'use strict';

var app = angular.module("curryBhariApp", ['ui.router', 'ui-notification', 'satellizer', 'ngCookies', 'angular-md5']);
app.config(function($stateProvider, $urlRouterProvider, NotificationProvider, $authProvider) {
    $authProvider.facebook({
        clientId: '1028093290647214'
    });

    $authProvider.google({
        clientId: '947748914062-cp7sdk6g0uehgt8nhlp2cjvenpfcj4bd.apps.googleusercontent.com'
    });

    NotificationProvider.setOptions({
        verticalSpacing: 20,
        horizontalSpacing: 20
    });

    $stateProvider
        .state('container', {
            title: 'Container',
            url: '/q=:q',
            templateUrl: 'container/container.html',
            controller: 'containerController',
            authenticate: true,
            params: {
                q: null,
            }
        });

    $stateProvider
        .state('cart', {
            title: 'Cart',
            url: '/cart',
            templateUrl: '/cart/cart.html',
            controller: 'cartController',
        });

    $stateProvider
        .state('checkout', {
            title: 'Checkout',
            url: '/checkout',
            templateUrl: '/checkout/checkout.html',
            controller: 'checkoutController',
        });

    $stateProvider
        .state('productDetails', {
            title: 'Product Details',
            url: '/product/:id',
            templateUrl: '/product-details/product-details.html',
            controller: 'productDetailsController',
            params: {
                id: null,
            }
        });

    $stateProvider
        .state('login', {
            title: 'Login',
            url: '/login',
            templateUrl: '/login/login.html',
            controller: 'loginController',
        });

    $stateProvider
        .state('payment', {
            title: 'Payment',
            url: '/payment',
            templateUrl: '/payment/payment.html',
            controller: 'paymentController',
        });

    $stateProvider
        .state('profile', {
            title: 'Profile',
            url: '/profile',
            templateUrl: '/profile/profile.html',
            controller: 'profileController',
        });

    $stateProvider
        .state('adminProducts', {
            title: 'AdminProducts',
            url: '/admin/products',
            templateUrl: '/admin/admin.products.html',
            controller: 'adminProductsController',
        });

    $stateProvider
        .state('adminAddProduct', {
            title: 'Add Product',
            url: '/admin/products/add',
            templateUrl: '/admin/admin.products.add.html',
            controller: 'adminProductsController',
        });
});
