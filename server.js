var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send("<h1>Response from Express Server....</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log('Server is up and running on port : ', PORT);
});
