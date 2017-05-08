var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var hole = require('./routes/fishing-route');
var user = require('./routes/home-route')
var mongoose = require('mongoose');
var config = require("./config"); 
var expressJwt = require("express-jwt");

mongoose.connect(config.database, function(){
    console.log('mongoose is loose as hell')
});


//middleware
app.use(bodyParser.json());
app.use("/api", expressJwt({secret: config.secret}));
app.use('/api/home', user);
app.use('/api/fishing', hole);
app.use("/auth", require("./routes/authRoutes"));  

app.use(express.static('public'));



app.listen(port, function(){
    console.log('port 3000');
})