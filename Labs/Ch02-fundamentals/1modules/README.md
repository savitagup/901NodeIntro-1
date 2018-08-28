# Chapter 2 Practice with modules

## Objectives:
* Follow the steps below to create node programs using custom modules

## Directory and files

1. In your \WIP directory, create the directory structure `\WIP\Ch02\modules`

1. Create a file called `main.js` to start your work.

## Steps

### require a Single function:

1. In the main.js file add this line:
    ```javascript
        const add = require('./add.js');
    ```

    READ: The .js extension is optional.

1. Open a VSCode terminal at this pont by right clicking on the file and choosing open at terminal.

1. Use `node main` to run the file and read the error.
    
    If you ever have a bad reference to a module this is what you will see.

1. READ: Notice how the Node `Module` class is trying to load the specified module. Node loads modules and caches them. Because of this, if in your code you use the same module more than once, you get the same instance that has been cached.

1. NOTE: Here we are looking in the local file system for a module using `./filename.js`

1. In your working directory, create a file called add.js and add this code to it:

    ```javascript
        module.exports = function add(a,b) {
            return a+b;
        }
    ```

1. In your main.js add this code:
    ```javascript
        console.log('5+7=', add(5,7));
    ```

1. Now try to run your main.js again. Do you get the expected output?

###  require a class:

1. In your main.js add this line:
    ```javascript
        const Calculator = require('./calculator.js');
    ```


1. Now create a file in the same directory called `calculator.js`.

1. Inside set module.exports to a class called Calculator with an add function that takes in two numbers and returns the sum.

    ```javascript
        module.exports = class Calculator {
    
            add(a,b) {
                return a+b;
            }
        }
    ```

1. In main, after you require this module, create a new instance like this:
    ```javascript
        const Calculator = require('./calculator.js');
        const myCalc = new Calculator();
    ```

1. Now call the add function passing two values and console log the result.
    ```javascript
        console.log(`1+2=`,myCalc.add(1,2));
    ```

1. Now create subtract and multiple functions and call those as well.
    
1. Mark your work as complete and the work on the bonus

## Bonus

1. Create a shape area calculator that has methods for calculating area of a circle given a radios, are a of a square given a side, and area of a triangle given base and height.
Require and use your calculator module.