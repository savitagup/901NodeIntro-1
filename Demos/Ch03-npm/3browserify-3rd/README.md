# Demo Chapter 3 - Browserify Demo
## Overview: Follow the steps to see Browserify in action

1. Look over the index.js file. What is being require-d? What is local and what is a 3rd party module?

1. Look up the usage of arr-union by web searching for `npm arr-union`

1. Read the package.json file - what are the dependencies?

1. To get the dependencies:
    npm install

1. Look at the scripts object in package.json. The build value is:
  `  browserify index.js -o bundle.js `

1. You can execute this from the command line using
    
    ```
        npm run build 
    ```

    or

    ```
        npm build
    ```

1. Notice the creation of the dist directory. Look at the geneerated js file.

1. Examine the contents of test.html.

1. Add the VSCode extension Open in Browser - if not already added. Author is TechER, refresh VSCode.

1. Load the test.html in the browser by right-clicking and choosing open in default browser - set the browser to Chrome.

1. Do you see the correct results?
