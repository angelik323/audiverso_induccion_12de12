let soundStarted = false;

async function playSound() {
  const loadSound = function (source) {
    const sound = document.createElement("audio");
    sound.src = source;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);
    return sound;
  };

  const buttonPlay = document.querySelector("#btnPlay");
  const sound = loadSound("sounds/AgeofEmpires2.wav");
  let played = false;

  buttonPlay.onclick = () => {
    if (!played) {
      try {
        sound.play();
      } catch (error) {
        console.log("error");
        return;
      }

      played = true;
    } else if (soundStarted) {
      sound.pause();
      sound.currentTime = 0;
    } else {
      sound.play();
    }
  };

  sound.addEventListener(
    "ended",
    function () {
      sound.currentTime = 0;
      sound.play();
    },
    false
  );

  sound.addEventListener("playing", () => {
    played = true;
    console.log("El sonido se está reproduciendo");
    soundStarted = true;
    buttonPlay.classList.toggle("btn-sound-on");
    buttonPlay.classList.remove("btn-sound-off");
  });

  sound.addEventListener("pause", () => {
    played = false;
    soundStarted = false;
    buttonPlay.classList.remove("btn-sound-on");
    buttonPlay.classList.toggle("btn-sound-off");
  });
}
