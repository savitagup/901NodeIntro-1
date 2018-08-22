# Chapter 4 Working with Files - Part 1

## Overview (Detailed steps below if you need help)
* You will do your work in the `Begin` folder, modifying error-first-callback.js
*  Read the `./input.txt` file using `fs.readFile` using an error first appraoch in the callback.
* Print the file contents to the terminal, if successful
* Print an error to the terminal if one occurs

## Detailed Steps

1. Notice the require fo the fs module.

1. In order to read the `./input.txt` file, pass the filename as the first argument into fs.readFile 

1. The second argument is a callback. You can use an anonymous function, or the block arrow notation.

1. It takes in as the first argument. Use an error first approach - meaning that after the first argument - the filename - use a callback function. In the callback, the first argument is a reference to an error, and the second is the filecontents. 

    ```javascript
    fs.readFile( [FILENAME],
           , [CALLBACK FUNCTION (err, data) {
               //process data or err here
           }]
    })
    ```
 
 1. Now go to Part II - using Promises