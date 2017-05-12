var express = require('express');
var FishingRouter = express.Router();
//var User = require('../models/user-schema');
var Hole = require('../models/fishingHole-schema');
var jwt = require("jsonwebtoken");
var config = require("../config");

// Angular
// $http.get("/api/fishing?favoritedBy=" + someUserId)

FishingRouter.route('/holes')
    //get all fishing holes in a state
    .get(function (req, res) {
        console.log(req.query);
        console.log(req.params.id);
        User.find(req.params.id)
            .where('state')
            .equals(req.query.state)
            .exec(function (err, users) {
                if (err) {
                    res.send(err)
                }
                console.dir(users);
                res.send({
                    users: users,
                    currentUser: req.user
                })
            })
    })
    .post(function (req, res) {
        var hole = new Hole(req.body);
        //        hole.favoritedBy = req.favoritedBy;
        hole.save(function (err, createdHole) {
            if (err) {
                res.send(err)
            }
            res.send(createdHole)
        });
    });

FishingRouter.route('/holes/:id')
    .get(function (req, res) {
        Hole.findOne({
            _id: req.params.id
        }, function (err, hole) {
            res.send(hole);
        })
    })
    .put(function (req, res) {
        Hole.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        }, function (err, hole) {
            if (err) res.status(500).send(err);
            res.send(hole);
        });
    })
    .delete(function (req, res) {
        Hole.findOneAndRemove({
            _id: req.params.id
        }, function (err, hole) {
            var response = {
                message: 'fishing hole deleted'
            };
            res.send(response);
        })
    });
module.exports = FishingRouter;
