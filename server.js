var express = require('express');
var app = express();
var path = require('path');

// set the public folder to serve public assets
app.use(express.static(_dirname + '/public'));

// set up our one route to the index.html file
app.get('*', function(req, res){
	res.sendFile(path.join(_dirname + '/public/views/index.html'));
});

// start the server on http://localhost:8080
app.listen(8080);
console.log('Magic happens on port 8080');

