# Chapter 2 Practice with NPM
## Objectives:
* You will use NPM to obtain packages for a project

## Steps

1. Open a terminal/command prompt in the /Begin folder. 

1. Issue this command:
`npm init`

1. Go through the wizard to create a package.json. Call the project `timeexample` and accept given defaults. You can supply whatever info that you like. This is more for you to practice and see the outcome of the wizard.

1. We want to get the package called Moment, and to add it to the newly created package.json.

1. Execute this from the command line:
npm install moment --save

1. Review the updated package.json. Can you see the changes? 

1. Notice that node_modules directory is created

1. In the /Begin folder, open the blank file called `timeExample.js`

1. Inside this file, add this code:
```javascript
var moment = require('moment');
console.log(moment().format('MM-DD-YYYY'));
```
1. execute the code using `node timeExample.js` or leave off the .js extension. Remember - you MUST be in the location of this file to execute it. Can open the terminal at the correct location by right-clicking the file and choosing Open Terminal in VS Code.

1. Visit the website [momentjs.com](http://momentjs.com) and browse the front page of examples.

1. Review the syntax and write code to display the difference between now and 01-01-2011.  - it should display something similar to 7 years ago.


## Bonus ##

1. Locate the documentation for moment-timezone.

1. Follow the steps as before to add this package to the package.json.

1. Take the current time and display it as hours with the timezones in EST and PDT.
Ex. 2pm EST is 11am PDT

