# Chapter 2 Practice with globals

## Objectives:
* Follow the steps below to create node programs using globals

## Steps

1. In your \WIP directory, create the directory structure `\WIP\Ch02\globals`

1. Create a file called `inputs.js`

1. READ: The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().

1. In your inputs file, use console.log to compare __filename
and __dirname to process.argv[0] and [1].

1. In your inputs file, use process.argv to print display two inputs from the command line input. Use the /Demos as a guide.


1. Execute the code using `node inputs.js`

## Bonus ##

1. Write a program that takes command line input of a name.

1. Process this input by displaying the reversed version of the name.