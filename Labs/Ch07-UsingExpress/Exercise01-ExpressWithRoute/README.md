# Chapter 7 Exercise 1: Simple Express Server with routes
## Objectives:
* This exercise will create a basic server using Express.
* A router will be used to set a response for /
* Check the Demos or solution if you need additional hints

## Steps
1. In your WIP directory, create this structure:
`WIP\Ch07\express-server`

1. In this directory, create a new Node.js project: `npm init -y`

1. Install Express: `npm install --save express`

1. Create a `config.json` file, containing a `port` key with the value `3000`

1. Create a `server.js` file
    - Require the `express` library as a `const` named `express`
    - Call `express()`, and store the result in a new variable named `app` [this is the Express application]
    - Require the `config.json` file as a `const` named `config`
    - Call the `app.listen()` method, and pass in as arguments:
        - The port number, coming from `config.port`
        - A callback function, with no input, that uses `console.log` to display a message that you're listening on the configured port

1. Create a directory and file:  `routes/index.js` file

1. In the file, require the `express` library as a `const` named `express`

    ```javascript
    const express = require("express");
    ```

1. Call `express.Router()`, and store the result in a new variable named `router` [this is an Express router]

    ```javascript
    let router = express.Router();
    ```


1. Call the `router.get()` method, passing in as the arguments:
        - The string "/" - this is the path on which the new route should be created
        - A callback (accepting a `req` and `res` argument), that specifies the logic to execute for the route

    ```javascript
        router.get("/", (req, res) => {
        res.send("Hello world! From the main page");
    });
    ```
    
1. Export the new router, by assigning it to `module.exports`

    ```javascript
    module.exports = router;
    ```

1. In server.js require the `./routes/index` module, and pass it into a call to `app.use()`

1. Run the server `nodemon server.js`

1. Point a browser at the URL `http://localhost:3000`

1. You should see the output from the server. If not fix any problems. And refresh the browser.
