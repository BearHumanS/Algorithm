const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const height = (Number(input[0]));
    let stars = ''
    for(let i = 0; i < height; i++) {
        for(let j = 0; j <= i; j++) {
            stars += '*'
        }
        stars += '\n'
    }
    console.log(stars)
    });