var express = require('express');
var WeatherRouter = express.Router();
var request = require('request');
var jwt = require("jsonwebtoken");
var config = require("../config");

WeatherRouter.route('/')

    .get(function(req,res){
        var key = 'key=5c3af7f2277b4f15bf5214611170805';
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if (dd<10){
            dd='0'+dd
        }
        if (mm<10){
            mm='0'+mm
        }

        var date = yyyy + "-" + mm + "-" + dd;


        request('http://api.worldweatheronline.com/premium/v1/marine.ashx?' + key + '&date=' + date
            + '&q=' + req.params.lat + "," + req.params.lon + '&format=json', function (error, response, body){
            var weatherInfo = JSON.parse(body);
            res.send(weatherInfo);
        });

    });

module.exports = WeatherRouter;