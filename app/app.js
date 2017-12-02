'use strict';

// Declare app level module which depends on views, and components
var templateStore = angular.module('templateStore', [ //name of the app
  'ngRoute',
  'templateStore.view1',
  'templateStore.view2',
  'templateStore.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
