"use strict";
var express = require("express");
var db_1 = require("../db");
var router = express.Router();
router.get('/', function (req, res) {
    console.log('from router get /');
    db_1.default.db.collection('stuff').find().toArray().then(function (things) {
        res.json(things);
    });
});
router.get('/:id', function (req, res) {
    console.log('from router get/:id');
    var id = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('stuff').findOne(id).then(function (thing) {
        res.json(thing);
    });
});
router.post('/', function (req, res) {
    var thing = req.body;
    thing._id = new mongodb.ObjectID(thing._id);
    db_1.default.db.collection('stuff').save(thing).then(function (newThing) {
        res.json(newThing);
    });
});
router.delete('/:id', function (req, res) {
    var id = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('stuff').remove({ _id: id }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
