function getDoor(level) {
  const x = getDoorPosition(level).x;
  const y = getDoorPosition(level).y;

  const door = new Sprite({
    position: { x, y },
    imageSrc: "https://takesolut.com/audifarma/img/doorOpen.png",
    frameRate: 5,
    frameBuffer: 5,
    loop: false,
    autoplay: false,
  });
  return door;
}

function getDoorPosition(level) {
  const positions = [
    { x: 767, y: 270 },
    { x: 771, y: 335 },
    { x: 176, y: 335 },
    { x: 176, y: 335 },
    { x: 176, y: 335 },
    { x: 760, y: 337 },
    { x: 760, y: 337 },
    { x: 853, y: 400 },
    { x: 853, y: 80 },
    { x: 853, y: 273 },
    { x: 90, y: 210 },
    { x: 780, y: 145 },
    { x: 545, y: 81 },
    { x: 470, y: 80 },
  ];
  return {
    x: positions[Number(level) - 1].x * porcX,
    y: positions[Number(level) - 1].y * porcX,
  };
}

function getBackground(level) {
  return new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: "https://takesolut.com/audifarma/img/backgroundLevel" + level + ".png",
  });
}

function createPlayer() {
  let player = new Player({
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

  return player;
}

function initPlayer(level) {
  let player = createPlayer();
  const positions = getPlayerPositions();

  const collisionsLevel = getCollisionLevel(level);

  //    const porcY2 = (canvasSize * relacionAnchoAlto) / maxHeight
  //const porcY = positions[level - 1].y / maxHeight;

  const parsedCollisions = collisionsLevel.parse2D();
  const collisionBlocks = parsedCollisions.createObjectsFrom2D();
  player.collisionBlocks = collisionBlocks;

  const position = {
    x: porcX * positions[level - 1].x,
    y: porcX * positions[level - 1].y,
  };

  player.position = position;

  if (player.currentAnimation) {
    player.currentAnimation.isActive = false;
  }

  return player;
}

function getPlayerPositions(level) {
  const positions = [
    { x: 200, y: 200 },
    { x: 96, y: 140 },
    { x: 817, y: 180 },
    { x: 817, y: 180 },
    { x: 817, y: 180 },
    { x: 120, y: 434 },
    { x: 136, y: 434 },
    { x: 58, y: 511 },
    { x: 58, y: 511 },
    { x: 58, y: 511 },
    { x: 66, y: 66 },
    { x: 58, y: 511 },
    { x: 58, y: 511 },
    { x: 58, y: 511 },
  ];

  return {
    x: positions[Number(level) - 1].x * porcX,
    y: positions[Number(level) - 1].y * porcX,
  };
}