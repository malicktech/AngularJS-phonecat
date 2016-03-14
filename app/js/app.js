'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatAnimations',
    'ui.bootstrap',

    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
    }
]);


/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);


/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

/* Filters */

var phonecatFilter = angular.module('phonecatFilters', []);
