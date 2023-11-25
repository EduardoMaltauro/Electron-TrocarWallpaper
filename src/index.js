const { app, BrowserWindow, ipcMain } = require("electron")
const { join } = require("path")
const FazerDownload = require("./functions/FazerDownload.js")

app.whenReady()
    .then(() => {
        const janela = new BrowserWindow({
            autoHideMenuBar: true,
            resizable: false,
            height: 256,
            width: 512,
            icon: join(__dirname, "/public/icon.png"),
            webPreferences: {
                preload: join(__dirname, "preload.js")
            }
        })

        janela.loadFile("./public/index.html")
        ipcMain.on("FazerDownload", FazerDownload)
    })