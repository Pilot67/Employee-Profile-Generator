const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const genHtml = require('./src/genHtml')
const companyEmployee = [];

//let role = "manager"

const promptEmployee = (role) => {
    const rolePrompt = promptQuestions(role);
    console.log("This is a  ",role);
    return inquirer.prompt(rolePrompt)
    .then(({name, id, email, ...rest}) => {
        switch (role) {
            case "Manager":
                let manager = new Manager(name,id,email,rest.officeNumber)
                companyEmployee.push(manager);
                break;
            case "Engineer":
                let engineer = new Engineer(name,id,email,rest.github)
                companyEmployee.push(engineer);
                break;
            case "Intern":
                let intern = new Intern(name,id,email,rest.school)
                companyEmployee.push(intern);
        }
        
    })
    .then(() => {
        // Add New employee
            return inquirer.prompt([
                {
                    type: "list",
                    name: "addRole",
                    message: "Choose the role of the new employee",
                    choices: ['Engineer','Intern', 'I dont need to add any more']
                },
            ])
            .then(({addRole}) => {
                if (addRole === "Engineer") {
                    promptEmployee("Engineer")
                } else if (addRole === "Intern") {
                    promptEmployee("Intern")
                } else {
                    gatherHtml()
                }
            })

    })
    .catch((err) => console.log("This error is ", err));
}



function tempArr() {
    let manager = new Manager("Stuart Simmons","1","stuart@simmons1.net","(03)9888-9865)")
    companyEmployee.push(manager);
    let engineer = new Engineer("John","56","John@gmail.com","Pilot67")
    companyEmployee.push(engineer);
    engineer = new Engineer("Nick","121","nick@gmail.com","Nick")
    companyEmployee.push(engineer);
    let intern = new Intern("Bob","356","stuart@maonash.edu.au","Monash")
    companyEmployee.push(intern);
    intern = new Intern("Carrie","888","carrie@swinburne.edu.au","Swinburne")
    companyEmployee.push(intern);
    console.log(companyEmployee);
}


function gatherHtml (){
    let data = genHtml.htmlHeader("My Company - Stuarts");
    companyEmployee.forEach(function (element){
        //console.log(element.getRole());
        if (element.getRole() === "Manager"){
            data += genHtml.htmlManager(element.getName(),element.getId(),element.getEmail(),element.getOfficeNumber())
        } else if (element.getRole() === "Engineer"){        
            data += genHtml.htmlEngineer(element.getName(),element.getId(),element.getEmail(),element.getGithub())
        }else {
            data += genHtml.htmlIntern(element.getName(),element.getId(),element.getEmail(),element.getSchool())
        }
    });
    data += genHtml.htmlFooter()
    saveHtml(data);
}

function saveHtml (data){
    fs.writeFile('./dist/index.html', data, (error) =>
    error ? console.error(error) : console.log('index.html written sucessfully')
);
    fs.copyFile('./src/style.css', './dist/style.css', (error) =>
    error ? console.error(error) : console.log('style.css written sucessfully')
);
    fs.copyFile('./src/reset.css', './dist/reset.css', (error) =>
    error ? console.error(error) : console.log('reset.css written sucessfully')
);
}

function promptQuestions(role) {
    const rolePrompt = [
        {
            type: "input",
            name: "name",
            message: `Please enter the ${role}'s name -`,
        },
        {
            type: "input",
            name: "id",
            message: `Please enter the ${role}'s employee's ID -`,
        },
        {
            type: "input",
            name: "email",
            message: `Please enter the ${role}'s email address -`,
            default: `stuart@simmons1.net`,
            validate: (email) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                  return true;
                } else {
                  console.log(".  Please enter a valid email");
                  return false;
                }
              },
        },  
    ];
    if (role === "Manager") {
        const tempPrompt = {
            type: "input",
            name: "officeNumber",
            message: `Please enter the office phone number`,
        }
        rolePrompt.push(tempPrompt);
    }else if (role === "Engineer") {
        const tempPrompt = {
            type: "input",
            name: "github", 
            message: "Please enter the engineers's github profile name -",
        }
        rolePrompt.push(tempPrompt);
    }else if(role === "Intern") {
        const tempPrompt = {
            type: "input",
            name: "school", 
            message: "Please enter the school's name -",
        }
        rolePrompt.push(tempPrompt);  
    }
    return rolePrompt;
}


//Init
(() => {
    promptEmployee("Manager")
})();
