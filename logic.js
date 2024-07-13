
let index = 0;
let slides = document.querySelector(".carusal-inner");
let totalslides = document.querySelectorAll(".carsual-item");
console.log(totalslides.length);
console.log(totalslides[1]);

function showSlide(i) {
  if (i >= totalslides.length) {
    index = 0;
    i = 0;
  } else if (i < 0) {
    index = totalslides.length - 1;
    i = totalslides.length - 1;
  }
  const currSlide = totalslides[i];
  currSlide.classList.toggle("active");
}

function prevImg() {
  showSlide(index);
  index = index - 1;
  showSlide(index);
}
function nextImg() {
  showSlide(index);
  index = index + 1;
  showSlide(index);
}
showSlide(index);
setInterval(bindEvents, 4000);
function bindEvents() {
  showSlide(index);
  index = index + 1;
  showSlide(index);
}



