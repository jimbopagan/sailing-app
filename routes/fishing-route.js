var express = require('express');
var FishingRouter = express.Router();
var Hole = require('../models/fishingHole-schema');
var jwt = require("jsonwebtoken");
var config = require("../config");


FishingRouter.route('/holes')
    .get(function (req, res) {
                var query = req.query || {};
                Hole.find(query, function (err, holes) {
                    if (err) res.status(500).send(err);
                    if (!holes.length){
                        res.send('No results found');
                    }
                    else {
                        res.send(holes);
                    }
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
