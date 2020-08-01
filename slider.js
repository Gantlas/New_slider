let slideIndex = 0;
showSlide(slideIndex);

prev = document.querySelector(".prev");

prev.onclick = () => {
  --slideIndex;
  showSlide(slideIndex);
};

next = document.querySelector(".next");

next.onclick = () => {
  ++slideIndex;
  showSlide(slideIndex);
};

dots = document.querySelectorAll(".dots-item");
dots.forEach((dot, i, arr) => {
  dot.onclick = () => {
    slideIndex = i;
    showSlide(i);
  };
});

function showSlide(index) {
  const slides = document.querySelectorAll(".item");
  const dots = document.querySelectorAll(".dots-item");

  if (index > slides.length - 1) {
    slideIndex = 0;
  }

  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.style.backgroundColor = "transparent";
  });

  slides[slideIndex].style.display = "block";
  dots[slideIndex].style.backgroundColor = "lightgreen";
}
