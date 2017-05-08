var express = require('express');
var FishingRouter = express.Router();
//var User = require('../models/user-schema');
var Hole = require('../models/fishingHole-schema');


FishingRouter.route('/')
//get all fishing holes in a state
    .get(function (req, res) {
    console.dir(res)
        Hole.find(req.params)//changed from req.params to req.query
        console.dir(req.params)
        console.log(req.query)
//            .where('state')
//            .equals(req.query.state)
//            .exec(function (err, holes) {
//                if (err) {
//                    res.send(err)
//                }
//                console.dir(holes);
//                res.send({
//                    holes: holes
//                })
//            })
        res.send(res)
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