const Employee = require('./Employee');
class Intern extends Employee{
    constructor(name,id,email,title, school) {
        super(name,id,email,title);
        this.school = school;
    }
    //method to get school of interns
    getSchool(){
        
        return this.school; 
    }
    //method to get role as interns
   getRole() 
   {
       return Intern;
    }

}

module.exports =Intern;