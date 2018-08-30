# Chapter 7 Exercise 3: Add Error Handling Middleware

## Objectives:
* Use new express modules for routing
* Share data between modules
* Use ES6 Object destructuring
* Use Error-handling Express middleware

Continue working in your `WIP\Ch07\express-server` directory. If you did not complete the last exercise, you can copy the solution from the last exercise in the solutions directory to be your starting point.


## New Packages

1. Use `npm install -S express-promise-router unhandled-error` to install these modules.

## Steps
1. You need to navigate to the directory Labs/Ch07-UsingExpress/Exercise04-ErrorHandlingMiddleware/__End__/code

1. Open the file `server.js`. Add two require statements for the new moduel you added:
	
	```javascript
		const expressPromiseRouter = require("express-promise-router");
		const unhandledError = require("unhandled-error");
	```

1. Unhandled error module :
	```
	Catches all unhandled Promise rejections.
	Catches all uncaught synchronous exceptions.
	Allows for reporting errors manually.
	Automatically crashes your process to prevent data loss or corruption.
    ```

1. You can add additional code after existing code. The first call you can make is to `unhandledError()` to create a new variable named `errorReporter`: [this is the unhandled error handler]

	```javascript
		let errorReporter = unhandledError((err) => {
			/* This should eventually be hooked into some sort of error reporting
			mechanism. */
			console.error("UNHANDLED ERROR:", err.stack);
		});

	```

		The callback that accepts an `err` argument will make a call to `console.error()`, with the `stack` property of the `err` object. This will contain the message and stacktrace for the error.

1. We want to be able to use this errorReporter in other modules. In the future there may be more things we wish to share. So create a variable called `state` that is an object literal. How wil you declare it knowing that it might be changed?

1. In this state object, store the `errorReporter` in a property with the same name. The `state object` will be passed around to other modules, so that they can access the `errorReporter` if needed.

1. Find your code that has:
	`app.use(require("./routes/index.js"));`

1. We will replace this now to use this code which uses an expressPromiserouter instead. 

	```javascript
		/* All routers and middlewares are wrapped into an express-promise-router to
		make sure that error handling is consistent throughout the application. */
		let router = expressPromiseRouter();

		router.use(express.static(path.join(__dirname, "public")));

		router.use(require("./routes/index.js"));

		app.use(router);
	```

### Add middleware error handler

1. Create a directory and file  `middleware/error-handler.js`.

1. Add this code to the file:
	```javascript
		let isInDevelopmentMode = (process.env.NODE_ENV === "development");

		module.exports = function({errorReporter}) {
			return function(err, req, res, next) {
				let stackTrace;

				if (isInDevelopmentMode) {
					stackTrace = err.stack;
				} else {
					stackTrace = null;
				}

				errorReporter.report(err, {
					req: req,
					res: res
				});

				res.status(500).render("error", {
					errorMessage: "Internal Server Error",
					stackTrace: stackTrace
				});
			};
		}

	```

1. This assigns the result of `(process.env.NODE_ENV === "development")` to `isInDevelopmentMode`
	- Assigns a new function to `module.exports`, that takes a single argument and uses object destructuring to extract the `errorReporter` property, and which returns an error handling middleware that: [this is the wrapper function that takes in the state object]
		1. Assigns either `err.stack` (when in development mode) or `null` (when not in development mode) to the `stackTrace` variable
		2. Calls `errorReporter.report()` with the following arguments:
			1. The `err` object
			2. A new object containing `req` and `res` as properties with the same name
		3. Calls `res.status` with `500` as an argument, and then immediately chains on a call to `.render()` with the following arguments:
			1. The string "error", as the template name
			2. A new object, containing the properties:
				1. `errorMessage`, containing the string "Internal Server Error"
				2. `stackTrace`, containing the variable of the same name

1. Back in `server.js` add this line of code: 

	`app.use(require("./middleware/error-handler")(state));`

	This requires it, and immediately calls the resulting function with the `state` object as its only argument, and passing the result into a new `app.use()` call that comes right before the existing call to `app.listen()`.

1. Modify `routes/index.js`:

	* remove this line of code: `const express = require("express");`
	* Change this line of code: `let router = require("express-promise-router")();`
	
## Run the application
1. Install Node dependencies `npm install` if running solution.
1. Run the server `nodemon server.js`
1. Point a browser at the URL `http://localhost:3000`
1. You should see the output from the server. If not fix any problems
