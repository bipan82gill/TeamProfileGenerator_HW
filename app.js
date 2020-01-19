
const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
// id =0;
emp=[];
 inquirer.prompt([{
        input : "type",
        message:"Enter your Name:",
        name: "name"
    },
    {
        input: 'type',
        message: 'enter your email',
        name: 'email'
    },
    // {
    //     input: 'type',
    //     message: 'enter your id',
    //     name: 'id'
    // },
    {
        type:"input",
        message: 'enter your title',
        name: 'title',
        choices:[manager, engineer, intern]
    },
    {
        type:"input",
        message:"enter office number",
        name:"officeNumber",
        when: (response) => response.title === 'manager'
    },
    {   type:"input",
        message:'Enter GitHub Usernsme',
        name:"usernsme",
        when: (response) => response.title === 'engineer'
    },
    {
        type:"input",
        message:"enter your School",
        name:"school",
        when: (response) => response.title === 'intern'
    }

]).then(function(response){

    if(response.title === 'manager'){
        var manager = new manager(response.name,response.email,response.title,response.officeNumber);
        emp.push(manager);
    }else if(response.title === 'engineer'){
        var engineer = new engineer(response.name,response.email,response.title,response.username);
        emp.push(engineer);
    }else if(response.title === 'intern'){
        var engineer = new engineer(response.name,response.email,response.title,response.school);
        emp.push(intern);
    }
    console.log(manager);
    console.log(engineer);
    console.log(intern);
});


        