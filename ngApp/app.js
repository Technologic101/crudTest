var crudtest;
(function (crudtest) {
    angular.module('crudtest', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: crudtest.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('edit', {
            url: '/edit',
            templateUrl: '/ngApp/views/edit.html',
            controller: crudtest.Controllers.EditController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(crudtest || (crudtest = {}));
