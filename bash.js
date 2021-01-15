// Output a prompt
//process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
/* process.stdin.on('data', data => {
	const cmd = data.toString().trim();

	process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
}); */

// generate data, output to terminal
// pwd should generate filepath to current dir
require('./pwd');
