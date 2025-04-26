// main.js

// Handle clicking on circular food image
const foodImages = document.querySelectorAll('.food-image');
foodImages.forEach(image => {
  image.addEventListener('click', function (event) {
    event.stopPropagation();
    const foodName = image.parentElement.getAttribute("data-name");
    let imageUrl = "";

    switch (foodName) {
      case "Caesar Salad":
        imageUrl = "https://raw.githubusercontent.com/abelbrhanegebreslasie/Frends/main/nnn.jpg";
        break;
      case "Omelette":
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/cr7.jpg";
        break;
      case "Pancakes":
        imageUrl = "https://images.unsplash.com/photo-1560807707-8cc7778e6627";
        break;
      default:
        imageUrl = "https://via.placeholder.com/300";
    }

    // Always navigate to index2.html when clicked
    window.location.href = `index2.html?image=${encodeURIComponent(imageUrl)}`;
  });
});

// Handle clicking outside the image container
document.body.addEventListener('click', function (event) {
  if (!event.target.closest('.image-container') && !event.target.closest('.food-image')) {
    // If currently on index2.html, go back to index.html
    if (window.location.href.includes("index2.html")) {
      window.location.href = 'index.html';
    }
  }
});
