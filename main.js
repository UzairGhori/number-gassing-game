#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//1)computer will generate a ramdom number
//2)user input for a guessing number
//3)campare user input with cumputer generated for a guessing number and show result 
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: (chalk.yellowBright("pleace guess a number between 1-10:")),
    }
]);
if (answers.userguessnumber === randomnumber) {
    console.log(chalk.blue("congratulation you guess a right number."));
}
else {
    console.log(chalk.greenBright("you guess wrong number"));
}
