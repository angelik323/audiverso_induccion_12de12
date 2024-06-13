function moveUp() {
  if (
    player.hitbox.position.x + player.hitbox.width <=
    door.position.x + door.width &&
    player.hitbox.position.x >= door.position.x &&
    player.hitbox.position.y + player.hitbox.height >= door.position.y &&
    player.hitbox.position.y <= door.position.y + door.height
  ) {
    const soundEnterDoor = document.getElementById("soundEnterDoor");
    soundEnterDoor.play();
    player.velocity.x = 0;
    player.velocity.y = 0;
    player.preventInput = true;
    player.switchSprite("enterDoor");
    door.play();

        //localStorage.setItem("level", Number(level) + 1);
        //alert( "level: " + level);
        
        const validLevels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
        if(validLevels.includes(level)){
            window.open(`./views/Module${level}/Mundo${level}.html`, "_self");
        }else{
            alert("Nivel No definido" + level + "-");
        return false;
        }
        return;
    } else {
        const soundUp = document.getElementById("soundUp");
        soundUp.play();
    }

    if (player.velocity.y === 0) {
        player.velocity.y = -20;
    }
}


function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function startMoveLeft() {
    keys.a.pressed = true;
}

function finishMoveLeft() {
    keys.a.pressed = false;
}

function startMoveRight() {
    keys.d.pressed = true;
}

function finishMoveRight() {
    keys.d.pressed = false;
}

const btnUp = document.getElementById("up");

btnUp.addEventListener("click", (event) => {
  handleEvent(event, moveUp);
});

btnUp.addEventListener("touchstart", (event) => {
  handleEvent(event, moveUp);
});

const btnLeft = document.querySelector("#left");

btnLeft.addEventListener("touchstart", (event) => {
  handleEvent(event, () => {
    isMovingLeft = true;
    intervalId = setInterval(startMoveLeft, 100);
  });
});

btnLeft.addEventListener("touchend", (event) => {
  handleEvent(event, () => {
    isMovingLeft = false;
    finishMoveLeft();
    clearInterval(intervalId);
  });
});

btnLeft.addEventListener("touchmove", (event) => {
  handleEvent(event, () => {
    if (isMovingLeft) {
      event.preventDefault();
    }
  });
});

const btnRight = document.querySelector("#right");

btnRight.addEventListener("touchstart", (event) => {
  handleEvent(event, () => {
    isMovingRight = true;
    intervalId = setInterval(startMoveRight, 100);
  });
});

btnRight.addEventListener("touchend", (event) => {
  handleEvent(event, () => {
    isMovingRight = false;
    finishMoveRight();
    clearInterval(intervalId);
  });
});

btnRight.addEventListener("touchmove", (event) => {
  handleEvent(event, () => {
    if (isMovingRight) {
      event.preventDefault();
    }
  });
});

function handleEvent(event, callback) {
  console.log("Pasando por el manejador de eventos");
  if (typeof callback === "function") {
    callback(event);
  }
}

window.addEventListener("keyup", (event) => {
  handleEvent(event, () => handleKeyUp(event));
});

function handleKeyUp(event) {
  switch (event.key) {
    case "a":
    case "A":
    case "ArrowLeft":
      keys.a.pressed = false;
      break;
    case "d":
    case "D":
    case "ArrowRight":
      keys.d.pressed = false;
      break;
  }
}

window.addEventListener("keydown", (event) => {
  if (player.preventInput) return;
  handleEvent(event, () => handleKeyDown(event));
});

function handleKeyDown(event) {
  switch (event.key) {
    case "w":
    case "W":
    case "ArrowUp":
      moveUp();
      break;
    case "a":
    case "A":
    case "ArrowLeft":
      keys.a.pressed = true;
      break;
    case "d":
    case "D":
    case "ArrowRight":
      keys.d.pressed = true;
      break;
    case " ":
      moveUp();
      break;
  }
}

function handleEvent(event, callback) {
  if (typeof callback === "function") {
    callback();
  }
  const buttonPlay = document.querySelector("#btnPlay");
  if (buttonPlay.classList.contains("btn-sound-on")) {
    buttonPlay.click();
  }
}

window.addEventListener('popstate', function(event) {
    var redirectUrl = localStorage.getItem('redirectUrl');
    if (redirectUrl) {
        window.location.href = redirectUrl;
    }
});

window.addEventListener('load', function() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn:', isLoggedIn);
    if (isLoggedIn === 'false' || isLoggedIn === null) {
        window.location.href = window.location.protocol + "//" + window.location.host; 
    }
});
