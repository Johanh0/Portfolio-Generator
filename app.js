// Setup requires
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const htmlGenerator = require(`./src/js/htmlGenerator`);
const apiGenerator = require(`./src/js/apiGenerator`);
const apiRepoGenerator = require(`./src/js/apiRepositoryGenerator`);


// Empty Obj for export the data
let exportObj = {};


// Using inquire for get the user info
function userData() {
    console.log(`
    ================
     Type your info
    ================
    `);

    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What's your name?`,

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to put a name`);
                }
            }
        },
        {
            type: `input`,
            name: `github`,
            message: `What's your GitHub username?`,

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to put a GitHub username`);
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `What's your email?`,

            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`You have to put your email`);
                }
            }
        },
        {
            type: `input`,
            name: `description`,
            message: `Describe yourself: `,

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to describe yourself`);
                }
            }
        },
        // {
        //     type: `checkbox`,
        //     name: `skills`,
        //     message: `Choose your skills: `,

        //     choices: [
        //         `HTML`, new inquirer.Separator(),
        //         `CSS`, new inquirer.Separator(),
        //         `JavaScript`, new inquirer.Separator(),
        //         `Git`, new inquirer.Separator(),
        //         `Boostrap`, new inquirer.Separator(),
        //         `node.js`, new inquirer.Separator(),
        //         `React`, new inquirer.Separator(),
        //     ],

        //     validate: skillInput => {
        //         if (skillInput) {
        //             return true;
        //         } else {
        //             console.log(`You have choose at least one skill`);
        //         }
        //     }
        // },
        {
            type: `list`,
            name: `profession`,
            message: `What's your GitHub username?`,

            choices: [
                `Front End Developer`, new inquirer.Separator(),
                `Back End Developer`, new inquirer.Separator(),
                `Full Stack Developer`, new inquirer.Separator(),
            ],

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to put a GitHub username`);
                }
            }
        },
    ])
};

userData().then(data => {

    // Destructuring
    exportObj = { name, github,email, description, profession } = data;

    console.log(github);

    fs.writeFile(`./src/js/api.js`, apiGenerator(github), err => {

        if (err) throw err;

        console.log(`Your API JS were created!`);
    });

    fs.writeFile(`./index..html`, htmlGenerator(name,github, email, description, profession), err => {
        
        if (err) throw err;

        console.log(`Your web it's created!`)
    });

    fs.writeFile(`./src/js/apiRepo.js`, apiRepoGenerator(github), err => {
        
        if (err) throw err;

        console.log(`Your API Repo were created!`);
    })

    console.log(data);
});