const request = require('request');

function curl() {
  return process.stdin.on('data', (data) => {
    const input = data.toString().trim().split(' ');
    const cmd = input[0];
    const url = input[1];

    if (cmd === 'curl') {
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          process.stdout.write(body);
          process.stdout.write('prompt > ');
        } else {
          console.log('Error ' + response.statusCode);
        }
      });
    }
  });
}
module.exports = { curl: curl };
