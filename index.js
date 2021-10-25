const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const genHtml = require('./src/genHtml')
const companyEmployee = [];

let role = "manager"

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
    {
        type: "input",
        name: "officeNumber",
        message: `Please enter the office phone number`,
    },
];


const promptEmployee = () => {
    return inquirer.prompt(rolePrompt)
    .then(({name, id, email, ...rest}) => {
        switch (role) {
            case "manager":
                let manager = new Manager(name,id,email,rest.officeNumber)
                companyEmployee.push(manager);
                break;
            case "engineer":
                let engineer = new Engineer(name,id,email,rest.github)
                companyEmployee.push(engineer);
                break;
            case "intern":
                let intern = new Intern(name,id,email,rest.school)
                companyEmployee.push(intern);
        }
        
        console.log(companyEmployee)
        companyEmployee.forEach(element  => {
            console.log(element.getRole(), " - This Role")
        });

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
                    role = "engineer";
                    rolePrompt[0].message = `Please enter the ${role}'s name -`,
                    rolePrompt[1].message = `Please enter the ${role}'s employee's ID -`,
                    rolePrompt[2].message =  `Please enter the ${role}'s email address -`,
                    rolePrompt[3].name = "github"
                    rolePrompt[3].message = "Please enter the engineers's github profile name -"
                    promptEmployee()
                } else if (addRole === "Intern") {
                    role = "intern";
                    rolePrompt[0].message = `Please enter the ${role}'s name -`,
                    rolePrompt[1].message = `Please enter the ${role}'s employee's ID -`,
                    rolePrompt[2].message =  `Please enter the ${role}'s email address -`,
                    rolePrompt[3].name = "school"
                    rolePrompt[3].message = "Please enter the school's name -"
                    promptEmployee()
                } else {
                    // End of inputs, call HTML build
                    throw new Error ("Die")
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


function gatherHTML (){
    let data = genHtml.htmlHeader("My Company - Stuarts");
    //companyEmployee.forEach(element => console.log(element.getRole()));
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



}

//Init
(() => {
    //promptEmployee()
    tempArr();
    gatherHTML();
})();
