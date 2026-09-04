const button = document.querySelector("#phoenix-button");
const menu = document.querySelector("#orbital-menu");
const hint = document.querySelector("#menu-hint");
const phoenixImage = document.querySelector(".phoenix-button img");

const frames = [
  "assets/img/fenix_fechada.png",
  "assets/img/fenix_semiaberta.png",
  "assets/img/fenix_aberta.png",
];

let animationId;

if (button && menu && phoenixImage) {
  button.addEventListener("click", () => {
    clearInterval(animationId);

    let frame = 0;
    let repetitions = 0;

    animationId = setInterval(() => {
      phoenixImage.src = frames[frame];
      frame = (frame + 1) % frames.length;

      if (frame === 0) {
        repetitions++;

        if (repetitions === 2) {
          clearInterval(animationId);
          phoenixImage.src = frames[2];
        }
      }
    }, 185);

    const isOpen = menu.classList.toggle("is-open");
    button.classList.toggle("is-flying", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu do portfólio" : "Abrir menu do portfólio",
    );
    hint.textContent = isOpen
      ? "Escolha um caminho"
      : "Toque ou clique para abrir";
  });
}
