import chalk from 'chalk'
import { getMessage } from './services/demo-service.js'

async function main (): Promise<void> {
  console.log(chalk.bgGreenBright(getMessage()))
}

await main()
