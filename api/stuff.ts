import * as express from 'express';
import database from '../db';

let router = express.Router();

//GET
router.get('/', (req, res) => {
  console.log('from router get /');

  database.db.collection('stuff').find().toArray().then( (things)=>{
    res.json(things);
  })
});

//Get Single

router.get('/:id', (req, res) => {
  console.log('from router get/:id');
  let id = new mongodb.ObjectID(req.params['id']);
  database.db.collection('stuff').findOne(id).then((thing)=> {
    res.json(thing);
  });
})

//Create & Update
router.post('/', (req, res) => {
  let thing = req.body;
  thing._id = new mongodb.ObjectID(thing._id);
  database.db.collection('stuff').save(thing).then((newThing) => {
    res.json(newThing);
  });
});

// Delete

router.delete('/:id', (req,res) => {
  let id = new mongodb.ObjectID(req.params['id']);
  database.db.collection('stuff').remove({_id:id}).then(() => {
    res.sendStatus(200);
  });
});

export default router;
