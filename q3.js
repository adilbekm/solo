// Write a function that counts the frequency of each word in data.txt
// Write everything in plain JS with no dependencies of external packages. 
// The function should be case-insensitive. For e.g. the frequency for the word "lorem" is 5.
// The output or result of your function should be sent to a file called result.txt

const fs = require('fs')

function countPars() {
    var words = fs.readFileSync("./data.txt").toString('utf-8').split(' ');
    let wordsLower = words.map(w => w.toLowerCase());
    let wordsUnique = new Set(wordsLower);
    let wordsCount = [];
    wordsUnique.forEach(w => {
        let count = 0;
        wordsLower.forEach(a => {
            if (a===w) {
                count++;
            }
        });
        console.log(w + ' ' + count);
    })
}

countPars();

