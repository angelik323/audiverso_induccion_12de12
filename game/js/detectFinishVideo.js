const video = document.getElementById("video_final");
const button_continuar = document.getElementById("boton_continuar");

video.addEventListener("ended", function () {
    console.log("El video ha finalizado la reproducción.");
    button_continuar.setAttribute("href", "https://universidad.audifarma.com.co/eva/mod/audiversoips/game/game.html");
    button_continuar.parentElement.classList.remove("disabled-button");
});

button_continuar.removeAttribute("href");
button_continuar.parentElement.classList.add("disabled-button"); // Agrega la clase de estilo deshabilitado al iniciar la página

const sparkPanel1 = document.querySelector(".sparkPanel1");
const sparkPanel2 = document.querySelector(".sparkPanel2");
const sparkPanel3 = document.querySelector(".sparkPanel3");

const numOfSparks = 26; // Número de elementos <i> que deseas generar

for (let i = 0; i < numOfSparks; i++) {
    const spark = document.createElement("i");
    spark.classList.add("spark");
    sparkPanel1.appendChild(spark.cloneNode());
    sparkPanel2.appendChild(spark.cloneNode());
    sparkPanel3.appendChild(spark.cloneNode());
}
