function initWin(origen) {
  //TODO: Hacer responsive
  let ext;
  let directory;
  let indice;

  switch (origen) {
    case "gems":
      directory = "https://takesolut.com/audifarma/img/Gems/seeGems/gem";
      ext = ".jpg";
      indice = 1;
      break;
    case "win":
      directory = "https://takesolut.com/audifarma/img/Gems/winGems/gana_gema";
      ext = ".jpg";
      indice = 1;
      break;
    case "map":
      directory = "https://www.takesolut.com/audifarma/img/Gems/map/map";
      ext = ".jpeg";
      indice = 0;
      break;
  }
  var imagen_gema = new Image();
  const mundoActualgemas = Number(localStorage.getItem("level") ?? 1) - indice;
  const rutaWinGem = directory + mundoActualgemas + ext;
  const img = document.getElementById("winGemImg");

  img.src = rutaWinGem;
}
