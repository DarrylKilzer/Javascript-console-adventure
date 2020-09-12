
const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("Hello!");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "green",
    backgroundColor: "#555555"
};
const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);


const prompt = require('prompt');

prompt.start();

prompt.get(['username', 'email'], (err, result) => {
    if (err) { return onErr(err); }
    let message = chalk.greenBright.bold('Command-line input received:');
    message += chalk.greenBright.bold('\nUsername: ' + result.username);
    message += chalk.greenBright.bold('\nEmail: ' + result.email);
    console.log(boxen(message, boxenOptions))
});

function onErr(err) {
    console.log(err);
    return 1;
}