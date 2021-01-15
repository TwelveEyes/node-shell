function PWD() {
	process.stdout.write('\nprompt > ');
	return process.stdin.on('data', data => {
		// this stores whatever we input
		const cmd = data.toString().trim();

		// if cmd === pwd, do something
		// process.cwd returns current working dir of node.js process

		if (cmd === 'pwd') {
			process.stdout.write(process.cwd());
		}
		process.stdout.write('\nprompt > ');
	});
}

module.exports = { PWD: PWD };
