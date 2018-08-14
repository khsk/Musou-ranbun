const Electron = require('electron');
const path = require('path');
const url = require('url');

let win;
const app = Electron.app;

function createWindow() {
    win = new Electron.BrowserWindow({Width: 800, height: 600, frame:false, });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    });

    win.webContents.openDevTools();
};

app.on('ready', () =>{
    createWindow();
    //なにかあるかも知れないので
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
     // On macOS it's common to re-create a window in the app when the
     // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});