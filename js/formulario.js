document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const spinner = document.querySelector(".spinner");
  const btnText = document.querySelector(".btn-text");
  const modal = document.getElementById("confirmacion");
  const closeModalBtn = document.querySelector(".close-modal");

  // Cierre del modal por botón
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Cierre del modal con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  });

  // Envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Activa clase para mostrar errores después del intento
    form.classList.add("intento-enviar");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    spinner.classList.remove("hidden");
    btnText.textContent = "Enviando...";

    setTimeout(() => {
      spinner.classList.add("hidden");
      btnText.textContent = "Enviar";
      modal.classList.remove("hidden");
      form.reset();
      form.classList.remove("intento-enviar");
    }, 2000);
  });
});

