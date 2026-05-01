// fungsi buka surat
function openLetter() {
  const letter = document.getElementById("letter");
  letter.classList.add("show");
}

/* animasi kelopak bunga */
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (Math.random() * 5 + 5) + "s";

  document.getElementById("petals").appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 8000);
}

setInterval(createPetal, 400);

function openLetter() {
  document.getElementById("letter").classList.add("show");
  document.getElementById("photo").classList.add("show-photo");
}