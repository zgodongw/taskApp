var express = require('express');
var app = express();


app.use(express.static("./")); // myApp will be the same folder name.
app.get('/*', function (req, res,next) {
    res.sendFile( __dirname + '/index.html'); 
});

var PORT = 3000
app.listen(PORT, 'localhost');

console.log("Server is Listening on port " + PORT);