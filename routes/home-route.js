var express = require('express');
var HomeRouter = express.Router();
var User = require('../models/user-schema');

HomeRouter.route('/')
    .get(function(req,res){
        User.find({user:req.user._id}, function(err, user){
            res.send(user);
        })
    });
