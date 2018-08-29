# Chapter 4 Demo  Working with Files - with Promises


## Overview : 

* You will review the use of Bluebird's PromisifyAll to modify the fs module to return promises

* You will use Bluebird's Promise.try() to wrap around a call to fs.readFileAsync and read the `./input.txt` file  

* Print the file contents to the terminal, if successful

* Print an error to the terminal if one occurs

## Detailed Steps

1. Add bluebird as a dependecy. Where can you find the documentation?

1. Notice the usage of `Promise.promisifyAll`.  This can be used to modify the fs module - it creates new functions that can be called that return promises - suffixed with Async.  This allows us to call `fs.readFileAsync` which returns a promise, instead of only having `fs.readFile` available. 

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
