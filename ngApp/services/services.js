var crudtest;
(function (crudtest) {
    var Services;
    (function (Services) {
        var StuffService = (function () {
            function StuffService($resource) {
                this.ThingResource = $resource('/api/stuff');
            }
            StuffService.prototype.getProducts = function () {
                return this.ThingResource.query();
            };
            StuffService.prototype.saveProduct = function (thing) {
                this.ThingResource.save(thing);
            };
            StuffService.prototype.deleteProduct = function (id) {
                this.ThingResource.remove({ id: id });
            };
            return StuffService;
        }());
        Services.StuffService = StuffService;
        angular.module('crudtest').service('stuffService', StuffService);
    })(Services = crudtest.Services || (crudtest.Services = {}));
})(crudtest || (crudtest = {}));
