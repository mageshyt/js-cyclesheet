let currentImageIndex = 0;
const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const imagePathInput = document.getElementById("imagePathInput");
const addImageButton = document.getElementById("addImageButton");
const slideshowContainer = document.getElementById("slideshow");

function startSlideshow() {
  setInterval(nextImage, 5000);
}

function showImage(index) {
  const images = document.querySelectorAll("#slideshow img");
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

function prevImage() {
  const images = document.querySelectorAll("#slideshow img");
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  console.log(currentImageIndex, images);
  showImage(currentImageIndex);
}

function nextImage() {
  const images = document.querySelectorAll("#slideshow img");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function addImage() {
  const imagePath = imagePathInput.value.trim();
  console.log(imagePath);
  if (imagePath) {
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = "Image";
    slideshowContainer.appendChild(img);
  }
  imagePathInput.value = "";
}

// Show the first image initially
showImage(currentImageIndex);

// Event listeners for buttons
startBtn.addEventListener("click", startSlideshow);
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
addImageButton.addEventListener("click", addImage);
