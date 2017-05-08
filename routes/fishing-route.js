var express = require('express');
var FishingRouter = express.Router();
//var User = require('../models/user-schema');
var Hole = require('../models/fishingHole-schema');


FishingRouter.route('/')
//get all fishing holes in a state
    .get(function (req, res) {
        var query = req.query || {};
    console.dir(res)
        Hole.find(query, function(err, holes) {
            if (err) res.status(500).send(err);
            res.send(holes);
        })
    })
    .post(function (req, res) {
        var hole = new Hole(req.body);
        hole.save(function (err, createdHole) {
            if (err) {
                res.send(err)
            }
            res.send(createdHole)
        });
    });
//FishingRouter.route('/fishing/:id')
//.get(function(req, res){
//    Hole.find()
//})
//    .put(function (req, res) {
//        Hole.findOneAndUpdate({
//            _id: req.params._id,
//            user: req.user._id}, req.body, {new: true}, function (err, hole) {
//            if (err) res.status(500).send(err);
//            res.send(hole);
//        });
//    })
//    .delete(function(req,res){
//        Hole.findOneAndRemove({
//            _id: req.params._id,
//            user: req.user._id}, function(err,hole){
//            var response = {
//                message: 'fishing hole deleted'
//            };
//            res.send(response);
//        })
//});
module.exports = FishingRouter;