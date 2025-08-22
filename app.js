const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Language selector toggle
const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", () => {
  langToggle.classList.toggle("active");
});
const slides = document.querySelector(".slides");
const leftBtn = document.querySelector(".btn1.left");
const rightBtn = document.querySelector(".btn1.right");

let index = 0;
const total = slides.children.length;
let autoSlideTimer;

function showSlide(i) {
  if (i < 0) index = total - 1;
  else if (i >= total) index = 0;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
}


function addToCart(button) {
  button.classList.toggle('added');
  if (button.classList.contains('added')) {
    button.textContent = "Səbətə əlavə edildi";
  } else {
    button.textContent = "Səbətə əlavə et";
  }
}


