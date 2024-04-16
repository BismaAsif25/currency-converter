#! /usr/bin/env node

import inquirer from "inquirer";




const currency:any ={
    USD:1,  //Base Currrency
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280
};


let user_answer = await inquirer.prompt(
    [
        {
            name:"from",
            type:"list",
            message:"Enter From Currency",
            choices:['USD','EUR','GBP','INR','PKR']
        },
        {
            name:"to",
            type:"list",
            message:"Enter To Currency",
            choices:['USD','EUR','GBP','INR','PKR']
        },
        {
            name:"amount",
            type:"number",
            message:"Enter Your Amount",
            
        },

    ]
)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount;
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
console.log(convertedAmount);