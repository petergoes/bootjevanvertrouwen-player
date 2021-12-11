const files = await fetch('/files.json').then(res => res.json())
const totalFiles = files.length
const currentPlayingFile = 0;

function startNextAudio(element) {
  const audio = event?.target?.nextElementSibling || document.querySelector('audio')
  audio.play()
}

function createAudioElement(file, index) {
  const element = document.createElement('audio')
  element.src = file
  element.controls = true

  element.addEventListener('ended', startNextAudio)

  return element
}

files
  .map(createAudioElement)
  .forEach(audio => document.body.appendChild(audio))

startNextAudio()