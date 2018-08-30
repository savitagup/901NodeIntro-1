# Chapter 7 Exercise 2: Templating With Data
## Objectives:
* Install Pug and use Pug to render views.
* Setup and pass data (locals) to rendered templates


Continue working in your `WIP\Ch07\express-server` directory. If you did not complete the last exercise, you can copy the solution from the last exercise in the solutions directory to be your starting point.

## New Packages

1. Install Moment.js: `npm install --save moment`

1. Install Pug with `npm install --save pug`

## Directories and files

1. Copy the public folder from this directory to your working directory


## Steps

1. Open for editing: `server.js`

1. Use require to define a path

	`const path = require("path");`


1. Use the `app.set()` to configure Express options for views and view engine.

	```javascript
	app.set("views", path.join(__dirname, "views"));
	app.set("view engine", "pug");
	```

## Update route to use views

1. Open the `routes/index.js` routing file for editing 

1. Require the `moment` library as a `const` named `moment`

1. Define the following array of objects for students. 
    ```javascript
		let studentArray = [{
			nameFirst: "Devin",
			nameLast: "Durgan",
			email: "Devin.Durgan@gmail.com",
			hireDate: moment("01/19/2015", "MM/DD/YYYY")
		}, {
			nameFirst: "Cristal",
			nameLast: "Adams",
			email: "Cristal.Adams@live.com",
			hireDate: moment("07/29/2016", "MM/DD/YYYY")
		}, {
			nameFirst: "Nettie",
			nameLast: "McGlynn",
			email: "Nettie.McGlynn@gmail.com",
			hireDate: moment("08/29/2015", "MM/DD/YYYY")
		}];
    ```

1. Change the route for (/) to render an index view that you will create in a future section, and pass the array of students.

	```javascript
		router.get("/", (req, res) => {
			res.render("index", {
				students: studentArray
			});
		});
	```

1. Create a new route for the "/class" path that renders the "class" template, passing in a similar object containing the `studentArray`


	```javascript
		router.get("/class", (req, res) => {
			res.render("class", {
				students: studentArray
			});
		});
	```

1. Create a new route for the "/about" path that renders an "about" template
	```javascript
	router.get("/about", (req, res) => {
		res.render("about");
	});
	```

## Template creation steps:
1. Create a `views` directory at the same level as `server.js`

1. In the views directory make new files “layout.pug” and “index.pug”

1. Layout.pug will contain the basic html, head and body elements: 	
	```
		doctype html
		html
			head
				meta(charset='utf-8')
				meta(http-equiv='X-UA-Compatible', content='IE=edge')
				meta(name='viewport', content='width=device-width, initial-scale=1')
				title Class Management App

				link(rel='stylesheet', href='/css/bootstrap.min.css')
				link(rel='stylesheet', href='/css/custom.css')
			body
				nav.navbar.navbar-default.navbar-static-top
					.container-fluid
						.navbar-header
							button.navbar-toggle.collapsed(type="button", data-toggle="collapse", data-target="#navbar", aria-expanded="false", aria-controls="navbar")
								span.sr-only Toggle navigation
								span.icon-bar
								span.icon-bar
								span.icon-bar
							a.navbar-brand(href="/") Class Management App
						#navbar.navbar-collapse.collapse
							ul.nav.navbar-nav.navbar-right
								li
									a(href="/") Students
								li
									a(href="/class") Tools
								li
									a(href="/about") About

				.container.content
					block content

				include foot

				script(src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js')
				script(src='/js/bootstrap.min.js')
				script(src='/js/script.js')


	```

1. Notice that use of include foot? You can create foot.pug with this information:
	```
	footer.footer
		.container
			ul.nav.navbar-nav.navbar-right
				li
					a(href="/") Home
				//li
					a(class="disabled") &copy; 2017 Karmoxie
	```

1. Create index.pug - it (and other files) extend layout in order to replicate layout for each page. Notice how index will use the passed in student data.

	```pug
	extends layout

    block content
    	header.page-header
    		h1 Student Manager Application

    	.search.container-fluid(style="text-align: center;")
    		.col-md-3
    		form.col-md-6
    			input.form-control#inputSearch(type="text", onkeyup="filter()", placeholder="Search (name, email or hire date)")
    		.col-md-3

    	.col-md-2

    	.students.col-md-8
    		table.table#studentList
    			thead
    				th Name
    				th Email
    				th Hire Date
    			each student in students
    				tr
    					td #{student.nameFirst} #{student.nameLast}
    					td #{student.email}
    					td #{student.hireDate.format("MM/DD/YYYY")}

    	.col-md-2
	```

1. Create class.pug
	```pug
	extends layout

    block content
    	header.page-header
    		h1 Classroom Tools

    	// TODO: Debug/Update - Add time instead of set
    	.container-fluid
    		.col-md-3
    		.break-timer.col-md-6
    			h2 Break Timer (Debugging)
    			div
    				button.btn.btn-default(onclick="startTimer(1)") 1 Min
    				button.btn.btn-default(onclick="startTimer(5)") 5 Min
    				button.btn.btn-default(onclick="startTimer(10)") 10 Min
    				button.btn.btn-default(onclick="startTimer(0)") Clear
    			#clockdiv
    				div
    					span.timer 00 : 00
    		.col-md-3

    	.container-fluid
    		.col-md-3
    		.random-student.col-md-6
    			h2 Student Selector
    			h4#student
    			button.btn.btn-success(onclick="selectStudent()") Select Student
    			if (!students)
    				span#student  No students loaded
    		.col-md-3

    	script(src='/js/timer.js')
    	if (students)
    		script.
    			// Pull student data from express into variable for script
    			var data = !{JSON.stringify(students)};
    			function selectStudent() {
    				var i, names = [];

    				for (i = 0; i < data.length; i++) {
    					names.push(data[i].nameFirst);
    				}

    				var setStudent = names[Math.floor(Math.random() * names.length)];

    				$("#student").html(setStudent);
    			}

	```
1. Create about.pug 

	```pug
		extends layout

		block content
			header.page-header
				h1 About

				h2 Student Manager Application
			.about
				strong Student Manager Application
				p This is a demo application used in the Intro to Node Development course
				p
					| For more information, please contact
					a(href='mailto:judy@karmoxie.com') Judy Lipinski
					| from
					a(href='http://www.karmoxie.com') Karmoxie Consulting
	```

## Run the application
1. If running solution, install Node dependencies `npm install`
1. Run the server `nodemon server.js`
1. Point a browser at the URL `http://localhost:3000`
1. Click the pages.
1. Fix any problems
