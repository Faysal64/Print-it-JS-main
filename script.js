let cliqueGauche = document.querySelector(".left");
let cliqueRight = document.querySelector(".right");

cliqueGauche.addEventListener("click", () => {
  console.log("Flèche de gauche cliquée !");
  changeSlide("left");
});

cliqueRight.addEventListener("click", () => {
  console.log("Flèche de droite cliquée !");
  changeSlide("right");
});


const imagesData = [
  {
    imagePath: "./assets/images/slideshow/slide1.jpg",
    text: "Impressions tous formats en boutique et en ligne",
  },
  
  {
    imagePath: "./assets/images/slideshow/slide2.jpg",
    text: "Tirages haute définition grand format pour vos bureaux et events",
  },
  {
    imagePath: "./assets/images/slideshow/slide3.jpg",
    text: "Grand choix de couleurs de CMJN aux pantones",
  },
  {
    imagePath: "./assets/images/slideshow/slide4.png",
    text: "Autocollants avec découpe laser sur mesure",
  },
];

const textReplacements = [
  {
    original: "en boutique et en ligne",
    replacement: '<span class="special-text">en boutique et en ligne</span>',
  },
  {
    original: "pour vos bureaux et events",
    replacement: '<span class="special-text">pour vos bureaux et events</span>',
  },
  {
    original: "de CMJN aux pantones",
    replacement: '<span class="special-text">de CMJN aux pantones</span>',
  },
  {
    original: "avec découpe laser sur mesure",
    replacement: '<span class="special-text">avec découpe laser sur mesure</span>',
  },
];

let activeIndex = 0; 


function updateBanner() {
  const bannerImg = document.querySelector(".banner-img");
  const bannerText = document.querySelector("#banner p");
  const points = document.querySelectorAll(".points");

  bannerImg.src = imagesData[activeIndex].imagePath;
  const textContent = imagesData[activeIndex].text;

  
  let updatedTextContent = textContent;
  textReplacements.forEach((replacement) => {
    updatedTextContent = updatedTextContent.replace(
      replacement.original,
      replacement.replacement
    );
  });

  
  bannerText.innerHTML = updatedTextContent;

  
  points.forEach((point, index) => {
    if (index === activeIndex) {
      point.classList.add("selected");
    } else {
      point.classList.remove("selected");
    }
  });
}


function changeSlide(direction) {
  if (direction === "right") {
    activeIndex++;
    if (activeIndex >= imagesData.length) {
      activeIndex = 0;
    }
  } else if (direction === "left") {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = imagesData.length - 1;
    }
  }

  updateBanner();
}


updateBanner();
