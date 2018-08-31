

const express = require("express");
const favicon = require('serve-favicon');
const path = require('path');
const lowercasePaths = require("express-lowercase-paths")


let app = express();


//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use((req, res, next)=> {
	const now = new Date().toString();
	console.log(`${now}: ${req.method} ${req.url}`);
	next();

})

app.use(lowercasePaths());

app.get("/", (req, res) => {
	res.send(`
		Hello. Review the readme and the code to see examples of middleware
	`);
});

app.get("/capitals", (req, res) => {
	res.send(`
		Check the above URL
	`);
});

app.post("/submit", (req, res) => {
	res.json(req.body);
});

app.listen(3177);

console.log('Listening on http://localhost:3177');
