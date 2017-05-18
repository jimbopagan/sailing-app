var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var morgan = require('morgan');
var port = process.env.PORT || 8000;
var hole = require('./routes/fishing-route');
var user = require('./routes/home-route');
var mongoose = require('mongoose');
var config = require("./config");
var expressJwt = require("express-jwt");

mongoose.connect(config.database, function () {
    console.log('mongoose is loose as hell')
});


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use("/api", expressJwt({
    secret: config.secret
}));
app.use('/api/home', user);

app.use('/api/fishing-hole', hole);


app.use("/auth/change-password", expressJwt({
    secret: config.secret
}));

app.use("/auth", require("./routes/authRoutes"));


app.use(express.static(path.join(__dirname, "public")));



app.listen(port, function () {
    console.log('port 3000');
})
