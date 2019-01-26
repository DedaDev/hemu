const { app } = require('electron')
let game_window = require('./src/controllers/game_window')

app.on('ready', game_window)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {if (win === null) createWindow()})