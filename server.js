/**
 * Created by Riad Mahmud on 3/21/2017.
 */
/// require the express module in server.js =============================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//db configure ===================================
var db = require('./app/config/db');
// set our port
var port = process.env.PORT || 8001;


//app dirname ===========================
app.use(express.static(__dirname + "/www"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
// middleware ===============================
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * configure our routes ======================
 */
var router = require('./app/routes/route')(app);
// start app ===============================================
// startup our app at http://localhost:8000
app.listen(port);

// shoutout to the user
console.log('Please open the URL: http://localhost:' + port);


