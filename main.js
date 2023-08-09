#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import getRandomNumber from './lib/get-random-number.js'
import outputToConsole from './lib/output-to-console.js'

const __filename = fileURLToPath(import.meta.url)
const flag = process.argv.includes('-kana')
const pickJsonFile = flag ? '../resources/katakana.json' : '../resources/hiragana.json'

async function getCharacters() {
  try {
    while (true) {
      const joinPath = path.join(__filename, pickJsonFile)
      const getJSON = await fs.readFile(joinPath, 'utf-8')
      const kana = await JSON.parse(getJSON)
      const character = kana[getRandomNumber(kana.length)]

      await outputToConsole(character.char, character.romaji)
    }
  } catch (err) {
    throw err
  }
}

getCharacters()
