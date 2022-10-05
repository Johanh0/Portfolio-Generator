

// Setup requires
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const htmlGenerator = require(`./src/js/htmlGenerator`);
const apiGenerator = require(`./src/js/apiGenerator`);


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
        {
            type: `list`,
            name: `profession`,
            message: `What's your GitHub username?`,

            choices: [
                `Front End Developer`, new inquirer.Separator(),
                `Back End Developer`, new inquirer.Separator(),
                `Full Stack Developer`, new inquirer.Separator(),
                `iOS Developer`, new inquirer.Separator(),
                `Androi Developer`, new inquirer.Separator()
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
    exportObj = { name, github, description, profession } = data;

    console.log(github);

    fs.writeFile(`./src/js/api.js`, apiGenerator(github), err => {

        if (err) throw err;

        console.log(`Your API JS were created!`);
    });

    fs.writeFile(`./index.html`, htmlGenerator(name, github, description, profession), err => {
        
        if (err) throw err;

        console.log(`Your web it's created!`)
    });
});