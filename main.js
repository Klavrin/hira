#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import getRandomNumber from './lib/get-random-number.js'
import outputToConsole from './lib/output-to-console.js'

const __filename = fileURLToPath(import.meta.url)

async function getCharacters() {
  try {
    while (true) {
      const joinPath = path.join(__filename, '../resources/hiragana.json')
      const getJSON = await fs.readFile(joinPath, 'utf-8')
      const hiragana = await JSON.parse(getJSON)
      const character = hiragana[getRandomNumber(hiragana.length)]

      await outputToConsole(character.hiragana, character.romaji)
    }
  } catch (err) {
    throw err
  }
}

getCharacters()
