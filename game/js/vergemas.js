var myCanvas2;
var ctx2;


function initGemas() {
    //TODO: "Optimizar sin los setTimeout"
    //TODO: Hacer responsive
    myCanvas2 = document.getElementById("myCanvas2");
    ctx2 = myCanvas2.getContext("2d");

    setTimeout(() => {
        resizeCanvasGemas();
    },100);
    setTimeout(() => {
        resizeCanvasGemas();
    },200);
    setTimeout(() => {
        resizeCanvasGemas();
    },300);
}

function resizeCanvasGemas() {
    myCanvas2.width = 1000; //window.innerWidth; // Ancho del modal (anchoModal)
    myCanvas2.height = myCanvas2.width * 0.6415;
    drawGemas();
}

function drawGemas() {
    var imagen_gema = new Image();
    const mundoActualgemas = Number(localStorage.getItem("level") ?? 1) - 1;
    imagen_gema.src = "https://takesolut.com/audifarma/img/Gems/seeGems/gem" + mundoActualgemas + ".jpg";

    ctx2.fillRect(0, 0, myCanvas2.width, myCanvas2.height);
    ctx2.drawImage(imagen_gema, 0, 0, myCanvas2.width, myCanvas2.height);
}
