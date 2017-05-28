
// Set up ==================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// var moment = require('moment');
// var jwt = require('jwt-simple');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');


// Configuration ==============================
var port = process.env.PORT || 80;
var config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);     // connect to mongoDB database on modulus.io



//middleware
app.set('view engine', 'jade');
app.use(compression());
app.use(express.static(path.join(__dirname, "../client")));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    // res.setHeader('Cache-Control', 'public, max-age=86400');
    next();
});


//routes
require('./app/routes/notications.routes')(app);



// app.use('*',function(req,res,next){
//     var indexFile = path.resolve(__dirname,'../client/index.html');
//     res.sendFile(indexFile);
// });

app.listen(port);
console.log('app listening on port ' + port);
