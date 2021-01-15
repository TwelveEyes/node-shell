// The stdin 'data' event fires after a user types in a line
/* process.stdin.on('data', data => {
	const cmd = data.toString().trim();

	process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
}); */

// generate data, output to terminal
// pwd should generate filepath to current dir

const { PWD } = require('./pwd');
PWD();

const { LS } = require('./ls');
LS();

const { cat } = require('./cat');
cat();

const { curl } = require('./curl');
curl();
