const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
    FazerDownload: function (endereco) {
        ipcRenderer.send("FazerDownload", endereco)
    }
  })