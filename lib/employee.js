
// create Employee class and its constructor
class Employee {
    constructor(name, id, title,email) {
        if (!name) {
            throw new Error("Plaese Enter your Name");
        }
        if (!id) {
            throw new Error("Plaese Enter ID of Employee");
        }
        if (!title) {
            throw new Error("Plaese enter Title of job");
        }
        this.name = name; 
        // //  id = lastid ++;
        // this.id = id; 
        this.title = title; 
        this.email = email;
  
    }

    // method to get name of employee
    getName() {
        return this.name;
        
    }

    //method to get id of employee 
    getId() {
        
        return this.id;       
    }
    //method to get email of an employee
    getEmail() {
        
        return this.email;
    }
    //method to getrole of an employee
    getRole() {
          
        return this.title;
    }

}
// lastId = 0;
module.exports = Employee;


