var http = require('http');
var data = require('./api/dummyapi');

const PORT = process.env.PORT || 3000;

http.createServer(function (req, res) {
	if (req.url === "/") {
		res.writeHead(200, {
			"content-type": "text/html"
		});

		var apiResponse = "<ul>";
		data.forEach(function (obj, index) {
			apiResponse += "<li>" + obj.name + " - " + obj.degree + " - " + obj.grade + "</li>";
		});
		apiResponse += "</ul>";

		res.write(apiResponse);
		res.end();
	} else {
		res.writeHead(404, {
			"content-type": "text/plain"
		});
		res.write("Ooops page not found..");
		res.end();
	}
}).listen(PORT);

console.log('Server is up and running on port ' + PORT + ' ....');
