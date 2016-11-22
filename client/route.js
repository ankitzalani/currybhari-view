'use strict';

var app = angular.module("curryBhariApp", ['ui.router', 'ui-notification', 'satellizer']);

app.config(function($stateProvider, $urlRouterProvider, NotificationProvider, $authProvider) {

  $authProvider.facebook({
      clientId: '1028093290647214'
  });

  // Optional: For client-side use (Implicit Grant), set responseType to 'token' (default: 'code')
  $authProvider.facebook({
      clientId: '1028093290647214',
      responseType: 'token'
  });

  $authProvider.google({
      clientId: 'Google Client ID'
  });


    NotificationProvider.setOptions({
        verticalSpacing: 20,
        horizontalSpacing: 20
    });

    $stateProvider
        .state('container', {
            title: 'Container',
            url: '/',
            templateUrl: 'container/container.html',
            controller: 'containerController',
            authenticate: true
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
});
