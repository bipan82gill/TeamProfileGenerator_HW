const Employee = require('./Employee');
//create class manager and its constructor
class Manager extends Employee{
    constructor(name,id,email,title, officeNumber){
        super(name,id,email,title);
        this.officeNumber= officeNumber;
    
    }
// method to get role as manager
   getRole()
   {
        return Manager;
        
    }
}
module.exports = Manager;