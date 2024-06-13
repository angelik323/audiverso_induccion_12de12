const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

var maxWidth = 1024;
var maxHeight = 576;
let currentOrientation = window.orientation;

canvas.width = maxWidth; //1024
canvas.height = maxHeight; //576

var canvasSize;
var relacionAnchoAlto = maxHeight / maxWidth; //576
var porcX = 1;

let parsedCollisions;
let background;
let door;
const player = new Player({
  imageSrc: "https://takesolut.com/audifarma/img/Ugo/buho-right.png",
  frameRate: 14,
  velocity: 8,
  animations: {
    idleRight: {
      frameRate: 14,
      frameBuffer: 4,
      loop: true,
      imageSrc: "https://takesolut.com/audifarma/img/Ugo/buho-front.png",
    },
    idleLeft: {
      frameRate: 14,
      frameBuffer: 4,
      loop: true,
      imageSrc: "https://takesolut.com/audifarma/img/Ugo/buho-front.png",
    },
    runRight: {
      frameRate: 14,
      frameBuffer: 3,
      loop: true,
      imageSrc: "https://takesolut.com/audifarma/img/Ugo/buho-right.png",
    },
    runLeft: {
      frameRate: 14,
      frameBuffer: 3,
      loop: true,
      imageSrc: "https://takesolut.com/audifarma/img/Ugo/buho-left.png",
    },
    enterDoor: {
      frameRate: 14,
      frameBuffer: 3,
      loop: false,
      imageSrc: "https://takesolut.com/audifarma/img/Ugo/buho-enterdoor.png",
      onComplete: () => {
        gsap.to(overLay, {
          opacity: 1,
          onComplete: () => {
            level++;

            if (level === 15) level = 1;
            levels[level].init();
            player.switchSprite("idleRight");
            player.preventInput = false;
            gsap.to(overLay, {
              opacity: 0,
            });
          },
        });
      },
    },
  },
});

let level = undefined;
//let levels = {}; // Inicializar como un objeto vacío

async function init() {
  await getLevelFromParams();
  if (Number(level) > 14) {
    level = "1";
  }

  if (level) {
    levels = {
      init: () => {
        canvasSize = getCanvasWidth();
        porcX = calculatePorcX(canvasSize);

        player.horizontalVelocity = Math.round(
          player.horizontalVelocity * porcX
        );

        parsedCollisions = getCollisionLevel(level).parse2D();
        player.collisionBlocks = parsedCollisions.createObjectsFrom2D();

        player.position = getPlayerPositions(level);

        if (player.currentAnimation) {
          player.currentAnimation.isActive = false;
        }

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: `https://takesolut.com/audifarma/img/backgroundLevel${level}.png`,
        });

        const doorPosition = getDoorPosition(level);

        door = getDoor(level);
      },
    };
    levels.init();
    animate();

    resizeCanvasPrincipal();
    await playSound();
  }
}

init();

if (Number(level) > 14) {
  level = "1";
}

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

const overLay = {
  opacity: 0,
};

function animate() {
  window.requestAnimationFrame(animate);

  background.draw();

  door.draw();
  player.handleInput(keys);
  player.draw();
  player.update();

  c.save();
  c.globalAlpha = overLay.opacity;
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}

function resizeCanvasPrincipal() {
  canvasSize = getCanvasWidth();
  porcX = calculatePorcX(canvasSize);

  if (window.orientation === 90 || window.orientation === -90) {
    const expectedHeight = maxHeight * porcX;

    canvas.height = expectedHeight; //576

    const expectedWidth = maxWidth * porcX;
    canvas.width = expectedWidth; //1024

    setupCanvasStyles();
  } else {
    const expectedHeight = maxHeight * porcX;

    canvas.height = expectedHeight; //576

    const expectedWidth = maxWidth * porcX;
    canvas.width = expectedWidth; //1024
  }

  parsedCollisions = getCollisionLevel(level).parse2D();
  player.collisionBlocks = parsedCollisions.createObjectsFrom2D();

  player.position = getPlayerPositions(level);

  player.horizontalVelocity = Math.round(player.horizontalVelocity * porcX);
  player.handleInput(keys);
  player.draw();
  player.update();
  door = getDoor(level);
  background.draw();
  door.draw();
}

function calculatePorcX(canvasSize) {
  if (window.orientation === 90 || window.orientation === -90) {
    const height = getCanvasHeight();
    let porc = 0;

    if (maxHeight > height) {
      porc = height / maxHeight;
    } else {
      porc = canvasSize / maxWidth;
    }

    if (canvasSize / maxWidth < porc) {
      return canvasSize / maxWidth;
    } else {
      return porc;
    }
  } else {
    return canvasSize / maxWidth;
  }
}

function getCanvasWidth() {
  return Math.min(
    maxWidth,
    screen.width < window.innerWidth ? screen.width : window.innerWidth
  );
}

function getCanvasHeight() {
  return Math.min(
    maxHeight,
    screen.height < window.innerHeight ? screen.height : window.innerHeight
  );
}

function validateCongrats() {
  const congratulation = localStorage.getItem("congratulation" + (level - 1));

  if (!congratulation && level > 1) {
    localStorage.setItem("congratulation" + (level - 1), true);
    const enlace = document.querySelector("a.winButton");
    enlace.click();
  }
}

function setupCanvasStyles() {
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.margin = "0";
  canvas.style.padding = "0";
  document.body.style.overflow = "hidden";
}

window.addEventListener("resize", function () {
  if (window.orientation !== currentOrientation) {
    currentOrientation = window.orientation;
    location.reload();
  }
  resizeCanvasPrincipal();
});

let isMovingLeft = false;
let isMovingRight = false;


window.addEventListener("onorientationchange", function () {
  location.reload();
});

window.addEventListener("load", function () {
  validateCongrats();
});


async function getLevelFromParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const levelParam = urlParams.get("level");

/*  if (levelParam) {
    const grade1 = localStorage.getItem("grade1");
    if (levelParam == 5) {
      if (grade1 && levelParam == 5 && Number(grade1) >= 3.5) {
        level = levelParam;
        localStorage.setItem("level", level);
      }else {
        level = levelParam -1;
      }
    }else {
      level = levelParam;
      localStorage.setItem("level", level);
    }
  } else {
  }*/
  level = localStorage.getItem("level") ?? "1";

}

