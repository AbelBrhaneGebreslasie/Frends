// Handle clicking on circular food image
const foodImages = document.querySelectorAll('.food-image'); // Changed variable name for consistency
foodImages.forEach(image => {
  image.addEventListener('click', function (event) {
    event.stopPropagation(); // Don't trigger body click
    const foodName = image.parentElement.getAttribute("data-name");
    let imageUrl = "";

    // Correct food image URLs
    switch (foodName) {
      case "Caesar Salad":
        imageUrl = "https://raw.githubusercontent.com/abelbrhanegebreslasie/Frends/main/nnn.jpg";
        break;
      case "Omelette":
        imageUrl = "https://raw.githubusercontent.com/abelbrhanegebreslasie/Frends/main/cr7.jpg";
        break;
      case "Pancakes":
        imageUrl = "https://raw.githubusercontent.com/abelbrhanegebreslasie/Frends/main/pancake.jpg"; // example
        break;
      default:
        imageUrl = "https://raw.githubusercontent.com/abelbrhanegebreslasie/Frends/main/default.jpg";
    }

    // Always navigate to indexamharic2.html when clicked
    window.location.href = `indexamharic2.html?image=${encodeURIComponent(imageUrl)}`;
  });
});

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

// Toggle between English and Amharic when clicked
function toggleLanguage() {
  const languageText = document.getElementById("language-text");

  // Check the current language and toggle it
  if (languageText.innerText === "አማርኛ") {
    languageText.innerText = "English"; // Change to Amharic
    // Redirect to Amharic page (you can adjust this logic depending on your page structure)
    window.location.href = "indexamharic.html"; // Redirect to the Amharic page (if you have that page)
  } else {
    languageText.innerText = "አማርኛ"; // Change to English
    // Redirect to English page
    window.location.href = "index.html"; // Redirect to the English page (if you have that page)
  }
  
}

// Add event listener to your language toggle element
const languageToggle = document.getElementById('language-toggle'); // Assuming you have a button or link to toggle language
languageToggle.addEventListener('click', toggleLanguage);
