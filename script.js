// Carousel
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-slide
setInterval(nextSlide, 5000);

// Modal Popup
const modal = document.getElementById("attractionModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImages = document.getElementById("modalImages");
const closeBtn = document.querySelector(".close");

slides.forEach(slide => {
  slide.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = slide.dataset.title;
    modalDesc.textContent = slide.dataset.desc;

    // Clear old images
    modalImages.innerHTML = "";

    // Add new images
    const images = slide.dataset.images.split(",");
    images.forEach(img => {
      const imageElement = document.createElement("img");
      imageElement.src = img.trim();
      modalImages.appendChild(imageElement);
    });
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});