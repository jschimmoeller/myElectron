const {app, BrowserWindow } = require('electron');

app.on('ready', ()=>{
  const win = new BrowserWindow({width: 600, height: 600});
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();
  win.setAlwaysOnTop(true);
});

exports.openWindow = () =>{
  const win = new BrowserWindow({width: 400, height: 200});
  win.loadURL(`file://${__dirname}/bear.html`);

}
