# DEMO Using Middleware
## Objectives:
* You will review various uses of middleware code

## Setup
1. Read through the package.json, noting dependencies
1. Do an npm install
1. Open a terminal at THIS location.

There is no code to be copied in these demos, these directions can be opened on Github for easy viewing.

## Steps

### 0 public folders

1. Open 0server-public.js. A quick way to make static assets available is to use the middleware on line 7 - this makes what is available in the public directory available. 

    Sometimes this is all people use Node and express for as it makes it quick and easy to test static assest from an http server rather than using the local file:// protocol. 

    Using path.join is good as files can be moved around but this is using __dirname.

1. Notice the only other route defined is /.

1. From the terminal type `node 0` then hit tab to autocomplete to node 0server-public.js. Hit return to start the server, control click to open the browser.

1. You should see the welcome page from the / route.

1. Keep the server running and hit the URL: http://localhost:3740/test.html

1. You can confirm this is the content from the public folder.

1. In the terminal, use control-c to stop the server but keep this directory available.


### 1 Logging time

1. Open 1server-logtime.js. Notice the port it will start on.

1. Note the middleware on line 9. This will run for EVERY reuest as it is not bound to any path.

1. Note the use of next() on line 11 - what does this do?

1. From the terminal type node 1 then hit tab to autocomplete to node 1server-logtime.js. Hit return to start the server, control click to open the browser.

1. What is in the console?
1. What is in the browser?

1. In the brower hit http://localhost:3741/something

1. Is anything logged? What is in the browser? Later we will handle 404 better.

1. Hit control-c in the terminal to stop the server - but return to the prompt.

### 2 Changing request object

1. Open 2server-change-req.js. Notice the port it will start on.

1. Note the use of sendFile on line 10 - this will cause all in coming request to go the site down page.

1. From the terminal type node 2 then hit tab to autocomplete to run the file. Hit return to start the server, control click to open the browser and verify behavior.

1. Hit control-c in the terminal to stop the server - but return to the prompt.


### 3 Site down

1. Open 3server-site-down.js. Notice the port it will start on.

1. Note the use of sendFile on line 10 - this will cause all in coming request to go the site down page. you coudl do this to temporarily halt the serving of any other pages. 

1. From the terminal type node the number of this file, then hit tab to autocomplete to run the file. Hit return to start the server, control click to open the browser and verify behavior.



1. Hit control-c in the terminal to stop the server - but return to the prompt.

### 4 Server unreachable

1. Open 4server-no-return.js. Notice the port it will start on.

1. From the terminal type node the number of this file, then hit tab to autocomplete to run the file. Hit return to start the server, control click to TRY to open the browser. Notice it does not load.

1. Examine the code - why is this?


1. Hit control-c in the terminal to stop the server - but return to the prompt.

### Favicon

1. Open 2server-mod-req. A quick way to make static assets available is to use the middleware on line 7 - this makes what is available in the public directory available. 

1. Notice the favicon in the browser tabs. It is a ukelele. 


1. View the require for serve-favicon and the entry in package.json

1. Reasons to use this module:
   - User agents request favicon.ico frequently and so you may wish to exclude these requests from your logs by using this middleware before your logger middleware.
   - This module caches the icon in memory to improve performance by skipping disk access.
   - Typically this middleware will come very early in your stack (maybe even first) to avoid processing any other middleware if we already know the request is for /favicon.ico. 

### lowercase paths
1. express-lowercase-paths   
    - Test this by trying to reach: http://localhost:3000/CAPITALS
    - Notice the output
    - View the code 
    ```javascript
    const lowercasePaths = require("express-lowercase-paths")

    app.use(lowercasePaths());
    ```   
    - This Express middleware module that will redirect user HTTP requests that contain uppercase letters, to the same URL converted to lowercase, without modifying query parameters.
    - Why use this module?
        - for parameter normalization and SEO purposes
        - Ensures that dynamic routes (using dynamic parameters, e.g. :username) will be interpreted in their lowercase form. 
        - Quicker than writing code that normalizes individual URL parameters
        - good for SEO (by ensuring there is single canonical URL for all of your content).
        - A 301 redirect is used to ensure that search engines are redirected to the lowercase, canonical version of your content