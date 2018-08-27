# Chapter 1: Getting Started with node

## Concepts

1. In your \WIP directory, create a directory structure of 
`\WIP\Ch01\js`

1. In this directory create a file called `jspractice.js`

1. In this file create variables to hold your firstName and LastName 

1. Use back ticks and template expressions instead of concatenation to display a greeting on two lines as follows:
  Hello
  firstName LastName

1. Test your code by executing it using `node jspractice.js` from the command line.

1. Now create a constructor function called Person, which takes in a firstName, lastName, and has a function called getFullName which uses a template expression to return the fullName.  Create a new person1 by calling the function passing your firstName and lastName variables. Use console.log and pass in person1.getFullName(). Run the code to see that it works as expected. For help, scroll down past the grey box:

  ```javascript










  function Person(fname, lname) {
      this.fname = fname;
      this.lname = lname;
      this.getFullName = function() {
          return `${fname} ${lname}`
      }
  }

  let person1 = new Person(firstName, lastName);
  console.log(person1.getFullName());
  ```
 
1. Create another subdirectory: `\WIP\Ch01\jschallenges`

1. In this directory create a file called `introduction.js`.

1. Now, open a command prompt (not within VSCode) to any path. Maximize the window.

1. Execute this command, we will talk more about its meaning later:
`npm install -g javascripting`

1. Now execute the following command:
  `javascripting`

1. The CLI screen will present a list of challenges to you. Choose the first one and ignore the bits about creating a directory, you will do your work in VSCode in the folder you have already created. Skip to the first part which says to add this to introduction.js:
  ```javascript
    console.log('hello');
  ```

1. Right click on your introduction.js file to open to a terminal at this path.

1. Note the command it says to run to verify your work. This is how you will check your work for future challenges.

  ```
  javascripting verify introduction.js
  ```

1. Read the output. If your code passes, go on to the next challenge by returning to the command prompt and hitting the up arrow to get to the menu again.

1. Complete all challenges. 

1. Mark your work as complete using the means specified for your class. Ask your instructor if they forgot to tell you. :)

## Bonus

