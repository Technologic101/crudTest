var crudtest;
(function (crudtest) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(stuffService) {
                this.stuffService = stuffService;
                this.things = stuffService.getProducts();
            }
            HomeController.prototype.save = function (thing) {
                this.stuffService.saveProduct(thing);
            };
            HomeController.prototype.delete = function (id) {
                var _this = this;
                this.stuffService.deleteProduct(id).then(function () {
                    _this.things = _this.stuffService.getProducts();
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var EditController = (function () {
            function EditController(stuffService) {
                this.stuffService = stuffService;
            }
            return EditController;
        }());
        Controllers.EditController = EditController;
    })(Controllers = crudtest.Controllers || (crudtest.Controllers = {}));
})(crudtest || (crudtest = {}));
