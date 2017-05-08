var express = require('express');
var FishingRouter = express.Router();
var User = require('../models/user-schema');
var Hole = require('../models/fishingHole-schema');

FishingRouter.route('/fishing')
    .get(function (req, res) {
        Hole.find(req.params.id)
            .where('state')
            .equals(req.query.state)
            .exec(function (err, holes) {
                if (err) {
                    res.send(err)
                }
                console.dir(holes);
                res.send({
                    holes: holes
                })
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
FishingRouter.route('/fishing/:id')
    .put(function (req, res) {
        Hole.findOneAndUpdate({
            _id: req.params._id,
            user: req.user._id}, req.body, {new: true}, function (err, hole) {
            if (err) res.status(500).send(err);
            res.send(hole);
        });
    })
    .delete(function(req,res){
        Hole.findOneAndRemove({
            _id: req.params._id,
            user: req.user._id}, function(err,hole){
            var response = {
                message: 'fishing hole deleted'
            };
            res.send(response);
        })
});
