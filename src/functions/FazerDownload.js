const { app, BrowserWindow } = require("electron")
const { download } = require("electron-dl")
const DefinirWallpaper = require("./DefinirWallpaper.js")

function FazerDownload(evento, resultado) {


    download(BrowserWindow.getFocusedWindow(), resultado, {
      directory: app.getPath("desktop"),
      saveAs: false,
      overwrite: true,
      filename: "wallpaper.jpg",
      onCompleted: DefinirWallpaper
    })
  }
  
  module.exports = FazerDownload