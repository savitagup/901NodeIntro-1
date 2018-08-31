# Chapter 8: Exercise 1: Basic Authentication

Continue working in your `WIP\Ch07\express-server` directory. If you did not complete the last exercise, you can copy the solution from the last exercise in the solutions directory to be your starting point.


## Objectives:
* Use body-parser
* Sessions + express-session usage
* Using a custom regular middleware
* Custom error types
* Access control (require login before allowing access to certain routes)
* Because of access control: specifying route-level middleware (requireLogin) before the route handler
* Conditional error logic; expose and log certain information under certain circumstances, but not under others


## New Packages

	* Use npm install -S to get `body-parser` and `express-session`

## Steps:

1. Open `server.js`, and at the top with the other require statetements - include body-parser and express-session. 

1. After the statement of: `router.use(express.static(path.join(__dirname, "public")));`

	add this new code:
	
	```javascript
		router.use(bodyParser.urlencoded({extended: true}));

		router.use(expressSession({
			secret: config.sessions.secret,
			resave: false,
			saveUninitialized: false
		}));

		router.use(require("./middleware/sessions-promises"));

		router.use(require("./routes/index.js"));
		router.use(require("./routes/users.js"));
	```

## New Packages

1. Use npm install -S to get `express-session` and `bluebird`

## Add use of sessions and promises
	
1. Create a new file at `middleware/sessions-promises.js`. This will be used to specify middleware that adds promisified session methods on every request object.

1. In server.js, require the new `sessions-promises`.
	` const expressSession = require("express-session");`

1. Before any routes are added with router.use 
and pass into `router.use` right after the initialization of the express-session middleware.

	- Note how config.json now contains a randomly generated secret key, and how this is used in the express-session configuration in server.js.

## Add custom errors

1. Create a new `errors.js` file, for containing custom error types that will be created using the `create-error` module. Include this module inside.


	- Note how a new `routes/users.js` file is created. This is going to contain the router that specifies all authentication-related routes (eg. login).
		- The new router specifies two routes: one to display the login page, and one to handle the form submission from that login page.
		- Note how the ‘form handling’ route validates the password, and either saves the session and redirects (if valid) or throws an error (if invalid).
	- Note also how a corresponding template was created at `views/admin/login.pug`, and how `views/layout.pug` was updated to include a link to the login page.

1. In `server.js`, you can see the new `routes/users.js` module being required and added to the application using `router.use`.
	- Note how a new `middleware/require-login.js` module is created, and how it validates whether the user is logged in, by inspecting the session data. If so, it calls `next()`, allowing the request to proceed. If not, it instead produces an error.
	- Note how `routes/index.js` is modified to use this new `require-login` middleware, to ensure that only logged-in users can access the student list.
1. Finally, note how the `middleware/error-handler.js` middleware is modified, to change its behaviour depending on scenario:
	- A default status code of 500 is set for any error that doesn’t have an explicit status code defined on it.
	- The original error message and stack trace are only displayed in situations where it’s safe to do so, depending on the status code of the error and whether the application is running in development mode or not.
	- Non-client errors (which usually means a bug has occurred, or something else that is of interest to the developer) are logged to the terminal.
 	- Error reporting is changed to only happen when a bug occurs, but not for other kinds of errors.



## Run the application
1. Install dependencies `npm install`
1. Run the server `nodemon server.js`
1. Point a browser at the URL `http://localhost:3000`
