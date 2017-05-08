var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var hole = require('./routes/fishing-route');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fishing', function(){
    console.log('mongoose is loose as hell')
});


//middleware
app.use(bodyParser.json());

app.use('/api/fishing', hole)

app.use(express.static('public'));



app.listen(port, function(){
    console.log('port 3000');
})