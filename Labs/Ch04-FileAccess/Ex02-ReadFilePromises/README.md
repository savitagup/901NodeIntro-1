# Chapter 4 Working with Files - Part II Promises

## Overview 
* This differs from Part I in that you will now uses Promises instead of messy callbacks.
* You will do your work in the `Begin` folder, modifying `promise-read.js`
* You will use Bluebird's PromisifyAll to modify the fs module to return promises
* You will use Bluebird's Promise.try() to wrap around a call to fs.readFileAsync and read the `./input.txt` file  
* Print the file contents to the terminal, if successful
* Print an error to the terminal if one occurs

## Detailed Steps

1. Expand the `Begin` folder and open the `package.json` file. 

1. What dependencies are listed? Can you find the documentation?

1. Open the file `promise-read.js`. Notice the setting of the Promise variable.

1. Notice the usage of `Promise.promisifyAll`.  This is being used to modify the fs module - it creates new functions that can be called that return promises - prefixed with Async.  This allows us to call `fs.readFileAsync` instead of only having `fs.readFile` available. 

1. Now you can structure your code as follows: 

    ```javascript
    Promise.try(() => {
        return fs.readFileAsync("./input.txt");
    }).then((fileContents) => {
        console.log(fileContents.toString());
    }).catch((err) => {
        console.error("An error occurred", err);
    });
    ```

1. Use `npm install` to get the dependencies and then use the node command to run the saved `promise-read.js` file.
