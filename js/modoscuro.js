function iniciarModoOscuro() {
  const btn = document.getElementById("modo-claro-toggle");
  if (!btn) {
    // Intentamos nuevamente en 100ms si aún no cargó
    setTimeout(iniciarModoOscuro, 100);
    return;
  }

  const body = document.body;

  // Cargar preferencia guardada
  if (localStorage.getItem("modo") === "claro") {
    body.classList.add("light-mode");
  }

  btn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const modo = body.classList.contains("light-mode") ? "claro" : "oscuro";
    localStorage.setItem("modo", modo);
  });
}

document.addEventListener("DOMContentLoaded", iniciarModoOscuro);

