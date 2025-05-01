
// main.js

// Handle clicking on circular food image
const foodImages = document.querySelectorAll('.food-image');
foodImages.forEach(image => {
  image.addEventListener('click', function (event) {
    event.stopPropagation(); // Don't trigger body click
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

// (Removed clicking outside navigation behavior here)

// Search functionality
const searchInput = document.getElementById('searchInput'); // Get the search input field
const foodItems = document.querySelectorAll('.item'); // All food items

// Event listener to filter items as user types
searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase().trim(); // Get the search query and make it lowercase

  foodItems.forEach(item => {
    const foodName = item.getAttribute('data-name').toLowerCase(); // Get the food name and make it lowercase
    if (foodName.includes(searchTerm)) {
      item.style.display = 'block'; // Show the item if it matches the search
    } else {
      item.style.display = 'none'; // Hide the item if it doesn't match the search
    }
  });
});
