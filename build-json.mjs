import fs from 'fs/promises'

const AUDIO_DIR = '/audio'
const ABSOLUTE_AUDIO_DIR = process.cwd() + AUDIO_DIR

const files = await fs.readdir(ABSOLUTE_AUDIO_DIR)
const paths = files.map(file => `${AUDIO_DIR}/${file}`)

await fs.writeFile('files.json', JSON.stringify(paths, null, 2), {encoding: 'utf-8'})