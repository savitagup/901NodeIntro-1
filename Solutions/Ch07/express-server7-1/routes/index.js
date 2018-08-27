'use strict';

const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello world! From the main page");
});


module.exports = router;

