let contador = document.getElementById("contador-animado");
let valorFinal = 550;
let velocidad = 500;
let actual = 489;

function animarContador() {
  if (actual < valorFinal) {
    actual++;
    contador.textContent = actual;
    setTimeout(animarContador, velocidad);
  }
}
animarContador();
