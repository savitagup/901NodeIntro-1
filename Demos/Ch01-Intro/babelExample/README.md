# Demo Chapter 01 - Intro
## Overview: Use npm install globally


1. Install Babel's CLI globally: `npm install --global babel-cli`

1. Read over the package.json. What is the babel related dependency?

1. Install the dependency for this example: `npm install`

1. Run the following: `babel --presets es2015 source.js -o destination.js`
	* `--presets es2015`: Enables the ES2015 (aka "ES6") preset
	* `source.js`: The file to transpile
	* `-o destination.js`: Tells Babel that this is meant to be a single file, and that the result should be saved as `destination.js`

1. Compare `source.js` (ES6) and `destination.js` (ES5), and spot the differences.

1. Execute this command, `node destination.js`
