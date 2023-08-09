import prompt from 'prompts'
import chalk from 'chalk'

const zen = process.argv.includes('-zen')

export default async function outputToConsole(char, romaji) {
  const wrongAnswer = !zen
    ? `That's ${chalk.red('wrong')}. You write ${chalk.cyan(char)} in romaji as ${chalk.cyan(romaji)}. (${char} --> ${romaji})`
    : `${chalk.red('Wrong.')}. (${char} --> ${romaji})`
  const correctAnswer = !zen
    ? `That's ${chalk.green('right')}! Let's go on...`
    : chalk.green('Correct!')

  const input = await prompt({
    type: 'text',
    name: 'romaji',
    message: !zen
      ? `How do you write ${chalk.blue(char)} in romaji (type exit to exit):`
      : chalk.blue(char)
  })

  if (input.romaji === 'exit') return process.exit()

  if (input.romaji !== romaji)
    console.log(wrongAnswer)
  else
    console.log(correctAnswer)

  // an empty log for better readability
  console.log()
}
