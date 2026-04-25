const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const item = document.querySelectorAll(".item");
const dot = document.querySelectorAll(".dot");
const number = document.querySelector(".number");

let active = 0;
const total = item.length;

function update(direction) {
  document.querySelector(".item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  if (direction == 1) {
    active += 1;

    if (active > total - 1) {
      active = 0;
    }
  } else if (direction == -1) {
    active -= 1;

    if (active < 0) {
      active = total - 1;
    }
  }

  item[active].classList.add("active");
  dot[active].classList.add("active");

  number.textContent = String(active + 1).padStart(2, "0");
}

nextButton.addEventListener("click", () => {
  update(1);
});

prevButton.addEventListener("click", () => {
  update(-1);
});

let direction = 1;

setInterval(() => {
  if (active === total - 1) {
    direction = -1;
  } else if (active === 0) {
    direction = 1;
  }

  update(direction);
}, 5000);

let startX = 0;
let endX = 0;

const section = document.getElementById('content');

section.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
}, { passive: true });

section.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const diff = startX - endX;

  if (diff > 50) {
    update(1);
  } else if (diff < -50) {
    update(-1);
  }
}

const elementos = document.querySelectorAll("[data-produto]");

elementos.forEach((el) => {
  el.addEventListener("click", () => {
    const produto = el.dataset.produto;
    window.open(gerarLink(produto), "_blank");
  });
});

function gerarLink(produto) {
  return `https://wa.me/5517999999999?text=Olá! Quero pedir: ${produto}. Pode me atender?`;
}