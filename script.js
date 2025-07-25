const displayedImage = document.getElementById("displayedImage");
const thumbnails = document.querySelectorAll(".thumbnails img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const imageSources = Array.from(thumbnails).map((img) => img.src);
let currentIndex = 0;

function updateImage(index) {
  currentIndex = (index + imageSources.length) % imageSources.length;
  displayedImage.src = imageSources[currentIndex];

  // Update active border
  thumbnails.forEach((t) => t.classList.remove("active"));
  thumbnails[currentIndex].classList.add("active");

  // Scroll into view (optional)
  thumbnails[currentIndex].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

// Thumbnail click
thumbnails.forEach((thumb, idx) => {
  thumb.addEventListener("click", () => updateImage(idx));
});

// Buttons
prevBtn.addEventListener("click", () => updateImage(currentIndex - 1));
nextBtn.addEventListener("click", () => updateImage(currentIndex + 1));

// Initialize
updateImage(0);
