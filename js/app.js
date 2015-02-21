var app = angular.module('mini-Routing', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl:'js/home/homeTmpl.html',
      controller:'homeController'
  })
    .when('/products/:id', {
      templateUrl:'js/products/productTmpl.html',
      controller:'productsController'
  })
    .when('/settings', {
      templateUrl:'js/settings/settingsTmpl.html',
      controller:'settingsController'
  })
    .otherwise({
      redirectTo:'/'
  })
});