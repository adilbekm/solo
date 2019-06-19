// Write a simple function that does the following
// Count the number of paragraphs in data.txt and console.log out the result
// The correct answer is: 5
// Bonus Points: provide a solution in as few lines of code as possible

// const fs = require('fs')

// let data = fs.readFileSync('./data.txt');
// let dataWords = data.split("\n"); 
// console.log(dataWords.length);

const fs = require('fs')

function countPars() {
    var data = fs.readFileSync("./data.txt").toString('utf-8').split('\n');
    let counter = 0;
    data.forEach(function(e) {
        if (e !== '') {
            counter++;
        }});
    console.log(counter);
}

countPars();
