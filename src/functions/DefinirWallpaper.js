const wallpaper = require("wallpaper")

async function DefinirWallpaper(retorno){
    await wallpaper.set(retorno.path)
}


module.exports = DefinirWallpaper