const fs = require('fs');

function LS() {
  // process.stdout.write('\nprompt > ');
  return process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls') {
      fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join('\n'));
          process.stdout.write('prompt > ');
        }
      });
    }
  });
}
module.exports = { LS: LS };
