'use strict';

var app = angular
  .module('vcodAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/404', {
        templateUrl: '404.html'
      })
      .when('/new_merchant', {
        templateUrl: 'views/new_merchant.html',
        controller: 'NewMerchantCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
