# DEMO Using Middleware
## Objectives:
* You will review middleware code

1. Do an npm install, and read the package.json dependencies and scripts.
1. Run `npm start` to start up server.js and open the browser to the right location. 

### Favicon
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