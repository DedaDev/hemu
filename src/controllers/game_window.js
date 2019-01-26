const {BrowserWindow} = require('electron')
let win;
module.exports = () =>{
    win = new BrowserWindow({ width: 256, height: 240, frame: false, webaudio:false, backgroundColor: '#000000'})
    win.loadFile('./src/views/game_window/index.html')
    win.on('resize',()=>{
        let scale = 240/256
        let size = win.getSize()
        win.setSize(size[0],Math.round(size[0]*scale))
    })
    //win.webContents.setAudioMuted(true)
    win.on('closed', () => {
      win = null
    })
}