#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess a Number Between 1-10",
    },
]); 

if (answers.userGuessNumber === randomNumber ) {
    console.log("Congrats you Guess Right Number");
} else {
    console.log("sorry! You Guess Wrong Number");   
}
