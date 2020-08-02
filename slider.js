const showSlide = (index) => {
  const slides = document.querySelectorAll(".item");
  const dots = document.querySelectorAll(".dots-item");

  switch (index) {
    case slides.length:
      slideIndex = 0;
      break;
    case -1:
      slideIndex = slides.length - 1;
      break;
  }

  slides.forEach((slide, i) => {
    if (i === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  dots.forEach((dot, i) => {
    if (i === slideIndex) {
      dot.style.backgroundColor = "lightgray";
    } else {
      dot.style.backgroundColor = "transparent";
    }
  });
};

let slideIndex = 0;
showSlide(slideIndex);

const prev = document.querySelector(".prev");

prev.onclick = () => {
  --slideIndex;
  showSlide(slideIndex);
};

const next = document.querySelector(".next");

next.onclick = () => {
  ++slideIndex;
  showSlide(slideIndex);
};

const dots = document.querySelectorAll(".dots-item");
dots.forEach((dot, i) => {
  dot.onclick = () => {
    slideIndex = i;
    showSlide(i);
  };
});
