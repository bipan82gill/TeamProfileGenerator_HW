const Employee = require('./Employee');
class Engineer extends Employee{
    constructor(name, id, title, email, userName) {
        super(name,id,title,email);
        this.userName = userName;

    }
    //method to get github username
    getGitHub(){
        
        return this.userName;
    }
    // method to get role for engineer
  getRole(){
     return Engineer;
  }

    
}
module.exports = Engineer;