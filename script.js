let blockYes = false;

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");
const result = document.querySelector(".result");

function moveNoButton(e) {
  e.preventDefault();
  e.stopPropagation();

  blockYes = true;

  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width;
  const maxY = cardRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  setTimeout(() => {
    blockYes = false;
  }, 400);
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });

// YES button (ONLY ONE LISTENER)
yesBtn.addEventListener("click", (e) => {
  if (blockYes) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  result.classList.remove("hidden");
});
const instaBtn = document.getElementById("instaBtn");

instaBtn.addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/_.gauravv
/";
});
