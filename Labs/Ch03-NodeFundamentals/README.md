# Chapter 3 Node fundamentals
## Objectives:
* Practice with Node's EventEmitter 
* Raise Events using EventEmitter's emit()
* Create named handlers and inline functions
* Practice with on and once 

## Overview (Detailed steps below if you need help)
* Create an app that raises an event 'work'
* When the event is raised the first time only, print out, 'Clocking In'
* Each time the 'work' event is emitted - events should fire to print the steps for TDD (test driven development)
* Your output should look like the following:
<pre>
*******
Clocking in...
Write Tests
Code
Refactor
Go to Meeting
*******
Write Tests
Code
Refactor
Go to Meeting
</pre>

## Detailed Steps

1. Do your work in the empty file in /Begin/events.js. If you need additional help, ask your instructor or fellow students. You can also refer to the solution in /End/events.js - just be sure that it makes sense to you - then recreate it.

1. Require the events module and store it in a reference called events

1. Use the events reference to create an EventEmitter with the keyword new, store this in a reference called emitter.

1. Set up the functionality so that when you emit the 'work' event things happen. You can use this format for events that keep happening. 
    ```javascript
    emitter.on('work', () => { 
        //doSomething
    });
    ```

1. For an event that only fires once, use 

    ```javascript
        emitter.once('work', () => { 
            //doSomething Only One time
        });
    ```

1. Once the setup is complete, fire off two events using:

    ```javascript
        emitter.emit('work');
        emitter.emit('work');
    ```

1. Examine your output

## Bonus

1. If done before others, create another type of event called 'break'.

1. When the 'break' event is omitted print out 'Check Emails'. You can put this in a named function handler, and add it to be called when the 'work' event is emitted too.