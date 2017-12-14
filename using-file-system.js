var fs = require('fs');

fs.writeFile("DummyText.txt", "This is dummy text file. Let's write some dummy text.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsa, placeat tempora commodi inventore totam nostrum dicta velit aliquid ad consequuntur atque in tempore voluptatibus, eum veniam, eaque! Quaerat, suscipit.", function (err) {
	if (err)
		throw err;
	console.log("File write operation is completed successfully...");
});
