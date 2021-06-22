import arg from 'arg';

const parseArgumentsOptions = rawArgs => {
	const args = arg(
		{
			'--input': String,
			'--translate': String,

			'-i': '--input',
			'-t': '--translate',
		},
		{
			argv: rawArgs.slice(2),
		}
	);
	return {
		skipPrompts: args['--yes'] || false,
		git: args['--git'] || false,
		template: args._[0],
		runInstall: args['--install'] || false,
	};
}

export function cli (args) {
	const arguments = parseArgumentsOptions(args);
	console.log(arguments);
}
