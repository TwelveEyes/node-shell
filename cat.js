const fs = require('fs');

function cat() {
  return process.stdin.on('data', (data) => {
    const input = data.toString().trim().split(' ');
    const cmd = input[0];
    const fileName = input[1];
    if (cmd === 'cat') {
      fs.readFile(fileName, 'utf8', (err, stringified) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(stringified);
          process.stdout.write('prompt > ');
        }
      });
    }
  });
}

module.exports = { cat: cat };
