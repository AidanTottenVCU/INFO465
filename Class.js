const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Readline for node.js
let inputarr = [];

//Prompt user and start the process
console.log("Welcome! Please enter as many integers as you'd like. When you're done, please press q to quit!\n");
function integerarr() {
    rl.question("Please enter an integer!\n", function(input) {
        if (input.toLowerCase() === 'q') {
            console.log("The program has been successfully quit \n");
            //function call to print the condtion
            multCheck(inputarr);
            rl.close();
            return;
        }
        //If user inputs Q we return everything and let the user know the program has been quit

        if (!isInt(input)) {
            console.log("You cannot enter letters, please start again.");
            integerarr();
            return;
        }
        //If invalid input tell them they cannot enter a string and start again

        inputarr.push(parseInt(input));

        integerarr();
        //Add int and restart the process
    });
}

function isInt(value) {
    //Parse value
    let val1 = parseFloat(value); 
    //Check that it is an integer
    return !isNaN(val1) && val1 == Math.floor(val1);
}

function multCheck(arr) {
    //nested for loop checking the values which continues till the end
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let sum = arr[i] * arr[j];
            //multiply then check if in array, if it is print and end
            if(arr.includes(sum)){
                console.log("Condition is met: " + arr[i] + " x " + arr[j] + " = " + sum);
                return;
            }
            
        }
    }
    console.log("Condition was not met");
}

integerarr();