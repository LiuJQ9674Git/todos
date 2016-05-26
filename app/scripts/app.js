'use strict';

/**
 * @ngdoc overview
 * @name todosApp
 * @description
 * # todosApp
 *
 * Main module of the application.
 */
angular
  .module('todosApp'
    /*, [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ]*/
  ).config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projemectManager', {
        templateUrl: 'views/projectmanager.html',
        controller: 'ProjectManagerController',
        controllerAs: 'main'
      })
      .when('/templateManager', {
        templateUrl: 'views/templatemanager.html',
        controller: 'TemplateManagerController',
        controllerAs: 'templateManager'
      })
      .when('/functionManager', {
        templateUrl: 'views/functionmanager.html',
        controller: 'FunctionManagerController',
        controllerAs: 'FunctionManager'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
