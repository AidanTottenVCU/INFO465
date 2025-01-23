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
        if (input == 'q') {
            console.log("The program has been successfully quit \n");
            console.log("The average of your numbers is: " + avgCalc(inputarr));
            console.log("The median of your numbers is: " + mediCalc(inputarr));
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

function mediCalc(arr) {
    arr.sort((a, b) => a - b);
    let length = arr.length;

    if (length % 2 == 1) {
        return arr[Math.floor(length / 2)];
    }

    let int1 = arr[(length / 2) - 1];
    let int2 = arr[length / 2];
    return (int1 + int2) / 2;
}

function avgCalc(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];
    }
    return (count / arr.length);
}

function isInt(value) {
    //Parse value
    let val1 = parseFloat(value); 
    //Check that it is an integer
    return !isNaN(val1) && val1 == Math.floor(val1);
}

integerarr();