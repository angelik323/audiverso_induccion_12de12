var myCanvas2;
var ctx2;
let mundoActual;

function initMap() {
  //TODO: "Optimizar sin los setTimeout"
  myCanvas2 = document.getElementById("myCanvas2");
  ctx2 = myCanvas2.getContext("2d");
  mundoActual = Number(localStorage.getItem("level") ?? 1) - 1;
  console.log(mundoActual);

  setTimeout(() => {
    resizeCanvas();
  }, 100);
  setTimeout(() => {
    resizeCanvas();
  }, 200);
  setTimeout(() => {
    resizeCanvas();
  }, 300);
}

const posiciones = [
  { x: 0.43359375, y: 0.0684027777777778 },
  { x: 0.564453125, y: 0.216875 },
  { x: 0.7009765625, y: 0.335 },
  { x: 0.7250625, y: 0.4241908556638246 },
  { x: 0.57890625, y: 0.3958587088915956 },
  { x: 0.503125, y: 0.2523118148599269 },
  { x: 0.35484375, y: 0.1809220462850183 },
  { x: 0.32203125, y: 0.3232277710109622 },
  { x: 0.43515625, y: 0.42028416565164434 },
  { x: 0.53515625, y: 0.5028416565164434 },
  { x: 0.33875, y: 0.5032399512789281 },
  { x: 0.25078125, y: 0.389998976857 },
  { x: 0.2284375, y: 0.5594725943 },
  { x: 0.34375, y: 0.6662606577344702 },
];

//      const anchoModal = document.getElementById("modal").width;

function resizeCanvas() {
  myCanvas2.width = 1000; //window.innerWidth; // Ancho del modal (anchoModal)
  myCanvas2.height = myCanvas2.width * 0.6415;
  draw();
}

function draw() {
  var mapa = new Image();
  mapa.src = "https://takesolut.com/audifarma/img/map/mapa.jpeg";

  var buho = new Image();
  buho.src = "https://takesolut.com/audifarma/img/map/buho2.png";

  ctx2.fillRect(0, 0, myCanvas2.width, myCanvas2.height);
  ctx2.drawImage(mapa, 0, 0, myCanvas2.width, myCanvas2.height);
  ctx2.drawImage(
    buho,
    posiciones[mundoActual].x * myCanvas2.width,
    posiciones[mundoActual].y * myCanvas2.height,
    80,
    80
  );

  console.log("hola mundo");
}

//resizeCanvas();

onload = function () {
  //resizeCanvas();
};

//window.addEventListener("resize", resizeCanvas);
