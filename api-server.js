var express = require('express');
var data = require('./api/dummyapi');

var app = express();

app.get('/', function (req, res) {
	var apiResponse = "<ul>";
	data.forEach(function (obj, index) {
		apiResponse += "<li>" + obj.name + " - " + obj.degree + " - " + obj.grade + "</li>";
	});
	apiResponse += "</ul>";
	res.send(apiResponse);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log('Server is up and running on port ' + PORT + ' ....');
});
