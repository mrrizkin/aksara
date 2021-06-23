import arg from "arg";
import { converter } from "./aksun.js";
import { version } from "../package.json"
import chalk from "chalk";

const parseArgumentsOptions = rawArgs => {
	const args = arg(
		{
			"--version": Boolean,
			"--help": Boolean,

			"-v": "--version",
			"-h": "--help",
		},
		{
			argv: rawArgs.slice(2),
		}
	);
	return {
		inputString: args._[0],
		showVersion: args["--version"] || false,
		showHelp: args["--help"] || false,
	};
}

export function cli (args) {
	const options = parseArgumentsOptions(args);
	if (options.showHelp) {
		console.info(`\
Usage:
    aksun [options] <input>

Example:
    aksun Sampurasun
    aksun "Wilujeung Sumping"
    aksun --version
    aksun --help

Options:
    -v, --version          show Aksun version
    -h, --help             show this help

Version: ${version}\
`);
		process.exit(0);
	}
	if (options.showVersion) {
		console.info(`Aksun version: ${version}`);
		process.exit(0);
	}
	if (options.inputString == undefined) {
		console.error(chalk.bold.red("Error: Please input your text"));
		process.exit(1);
	}
	let result = converter(options.inputString);
	console.log(result);
}
