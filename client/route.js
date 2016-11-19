'use strict';

var app = angular.module("curryBhariApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
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
});
