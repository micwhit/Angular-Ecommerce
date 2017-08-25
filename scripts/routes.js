/// <reference path="../node_modules/angular/angular-route.js" />
/// <reference path="../node_modules/angular/angular.js" />

(function () {
    angular.module('store').config(function ($routeProvider) {
        $routeProvider.when('/filterColors', { templateUrl: '/templates/filters/productColor.html' }); //when (variable name--add the forward slash, {object})
        $routeProvider.when('/filterSize', { templateUrl: '/templates/filters/productSize.html' });
        $routeProvider.when('/productReview', { templateUrl: '/templates/products/productReview.html' });
        $routeProvider.when('/productTemple', { templateUrl: '/templates/products/productTemplate.html' });
    });
})();
