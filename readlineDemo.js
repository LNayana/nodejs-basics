var readline = require('readline');

var interface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

interface.question("Which is your favorite color? ", (answer) => {
	if (answer.toLowerCase() !== "")
		console.log("My favorite color is : ", answer);

	interface.close();
	process.stdin.destroy();
});
