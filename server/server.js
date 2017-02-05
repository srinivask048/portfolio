var express = require("express");
var path = require("path");



var app = express();

app.set('port', 4000);

app.listen(app.get('port'), function(){
	console.log('listening on port:'+app.get(port));
});
