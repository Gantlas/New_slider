const showSlide = (index) => {
  const slides = [...document.querySelectorAll(".item")];
  const dots = [...document.querySelectorAll(".dots-item")];

  switch (index) {
    case slides.length:
      slideIndex = 0;
      break;
    case -1:
      slideIndex = slides.length - 1;
      break;
  }

  slides.map((slide, i) => {
    if (i === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  dots.map((dot, i) => {
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

//=======================================================================>
// const slides = document.querySelectorAll(".item");
// console.log(slides);

// const newSlides = [...document.querySelectorAll(".item")];
// console.log(newSlides);

// newSlides.map((slide) => {
//   slide.className += " map";
// });

// console.log(newSlides);
// console.log(a);

//=======================================================================>
// const arr = [1, 2, 3, 4, 5];

// const newArr = [...[1, 2, 3, 4, 5]];
// console.log(newArr);

// newArr.map((item) => {
//   item = "a";
// });

// // console.log(a);
// console.log(newArr);
