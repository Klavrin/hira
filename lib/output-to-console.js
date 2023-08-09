import prompt from 'prompts'
import chalk from 'chalk'

export default async function outputToConsole(char, romaji) {
  const input = await prompt({
    type: 'text',
    name: 'romaji',
    message: `How do you write ${chalk.blue(char)} in romaji (type exit to exit):`
  })

  if (input.romaji === 'exit') return process.exit()

  if (input.romaji !== romaji) {
    console.log(
      `That's ${chalk.red('wrong')}. You write ${chalk.cyan(char)} in romaji as ${chalk.cyan(
        romaji
      )}. (${char} --> ${romaji})`
    )
  } else console.log(`That's ${chalk.green('right')}! Let's go on...`)

  // an empty log for better readability
  console.log()
}
