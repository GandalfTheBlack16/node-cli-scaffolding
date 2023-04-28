import chalk from 'chalk';
import { getMessage } from './services/demo-service.js';

async function main() {
    console.log(chalk.bgGreenBright(getMessage()));
}

main();