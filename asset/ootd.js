const ootdImages = {
  shoes1: ["img/b1.png", "img/b2.png", "img/b3.png", "img/b4.png", "img/b5.png", "img/b6.png", "img/b7.png", "img/b8.png", "img/b9.png"],
  shoes2: ["img/g1.png", "img/g2.png", "img/g3.png", "img/g4.png", "img/g5.png", "img/g6.png", "img/g7.png", "img/g8.png", "img/g9.png"],
  shoes4: ["img/g1.png", "img/g2.png", "img/g3.png", "img/g4.png", "img/g5.png", "img/g6.png", "img/g7.png", "img/g8.png", "img/g9.png"],
  shoes5: ["img/b1.png", "img/b2.png", "img/b3.png", "img/b4.png", "img/b5.png", "img/b6.png", "img/b7.png", "img/b8.png", "img/b9.png"],
  shoes9: ["img/g1.png", "img/g2.png", "img/g3.png", "img/g4.png", "img/g5.png", "img/g6.png", "img/g7.png", "img/g8.png", "img/g9.png"],
  shoes10: ["img/b1.png", "img/b2.png", "img/b3.png", "img/b4.png", "img/b5.png", "img/b6.png", "img/b7.png", "img/b8.png", "img/b9.png"],
  shoes11: ["img/g1.png", "img/g2.png", "img/g3.png", "img/g4.png", "img/g5.png", "img/g6.png", "img/g7.png", "img/g8.png", "img/g9.png"],
   shoes12: ["img/b1.png", "img/b2.png", "img/b3.png", "img/b4.png", "img/b5.png", "img/b6.png", "img/b7.png", "img/b8.png", "img/b9.png"],
  };

const backgroundImages = [
  "img/school.png",
  "img/beach.png",
  "img/mall.png",     
  "img/office.png",   
  "img/park.png"      
];


const productId = document.body.dataset.productId;
const outfitImages = ootdImages[productId] || [];

let currentOutfitIndex = 0;

const outfitImage = document.getElementById("outfitImage");
const backgroundDiv = document.getElementById("background");

document.getElementById("prevOutfit").addEventListener("click", () => {
  currentOutfitIndex = (currentOutfitIndex - 1 + outfitImages.length) % outfitImages.length;
  updateOutfit();
});

document.getElementById("nextOutfit").addEventListener("click", () => {
  currentOutfitIndex = (currentOutfitIndex + 1) % outfitImages.length;
  updateOutfit();
});

function updateOutfit() {
  outfitImage.src = outfitImages[currentOutfitIndex];
}

function changeBackground(index) {
  backgroundDiv.style.backgroundImage = `url('${backgroundImages[index]}')`;
}


updateOutfit();
changeBackground(0);
