# TeamProfileGenerator_HW
This applicationis is used to build a Node CLI that takes information about employees and generates an HTML webpage that displays summaries for each person.Testing is a key piece in making code maintainable.
# File structure is :
    ./lib
        employee.js(base class) , engineer.js, intern.js , manager.js
    ./test
        employee.test.js , engineer.test.js , intern.test.js , manager.test.js
    ./app.js 
        This contains main functionality about application.It has function to write html web page dynamically.
# Packages required: 
    -npm install inquirer (to collect prompt information)
    -npm jest (to do test)
# Functinality:
 As a manager
He generates a webpage that displays his team's basic info
so that he has quick access to emails and GitHub profiles.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * title
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

  # Demo 
  
