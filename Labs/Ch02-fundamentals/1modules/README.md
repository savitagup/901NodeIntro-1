# Chapter 2 Practice with core modules and globals

## Objectives:
* Follow the steps below to create node programs using globals and core modules.

## Steps

1. In your \WIP directory, create directories `\WIP\Ch02\modules`

1. Create a file called `main.js`

1. In this file add this line:
    ```javascript
    require('./shapes.js');
    ```

1. Open a VSCode terminal at this pont by right clicking on the file and choosing open at terminal.

1. Use `node main` to run the file and read the error.
    
    If you ever have a bad reference to a module this is what you will see.

1. READ: Notice how the Node Module class is trying to load the specified module. Node loads modules and caches them. This was in your code if there is more than one use of a module, yu get the same instance that has been cached.

1. READ: Here we are looking in the local file system for a module using "./filename.js"

1. Now create a file in the same directory called shapes.js.

https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/ 