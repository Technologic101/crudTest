namespace crudtest.Services {
  export class StuffService {
    private ThingResource;

    public getProducts() {
      return this.ThingResource.query();
    }

    public saveProduct(thing) {
      this.ThingResource.save(thing);
    }

    public deleteProduct(id) {
      this.ThingResource.remove({id: id});
    }

    constructor($resource) {
      this.ThingResource = $resource('/api/stuff');
    }
  }

  angular.module('crudtest').service('stuffService', StuffService);
}
