document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(res => res.text())
      .then(data => {
        el.innerHTML = data;

        // cargamos el script de modo oscuro
        if (file === "header.html") {
          const script = document.createElement("script");
          script.src = "js/modoscuro.js";
          document.body.appendChild(script);
        }
      });
  });
});
