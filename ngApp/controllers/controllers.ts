namespace crudtest.Controllers {

    export class HomeController {
      public things;
      public thing;

      public save(thing) {
        this.stuffService.saveProduct(thing);
      }

      public delete(id) {
        this.stuffService.deleteProduct(id).then(() => {
          this.things = this.stuffService.getProducts();
        });
      }

      constructor( private stuffService) {
        this.things = stuffService.getProducts();
      }
    }


    export class EditController {

      constructor (private stuffService) {

      }
    }

}
