// Handle clicking on circular food image
const foodImages = document.querySelectorAll('.food-image'); // Changed variable name for consistency
foodImages.forEach(image => {
  image.addEventListener('click', function (event) {
    event.stopPropagation(); // Don't trigger body click
    const foodName = image.parentElement.getAttribute("data-name");
    let imageUrl = "";

    // Correct food image URLs
    switch (foodName) {
      case "እንቁላል":
        imageUrl = "https://raw.githubusercontent.com/abelbrhanegebreslasie/Frends/main/image/ff.jpg";
        break;
      case "በርገር":
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/image/hh.jpg";
        break;
      case "ፓስታ":
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/image/kk.jpg";
        break;
      case "ላዛኛ":
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/image/qqq.jpg";
        break;


      case "እንጀራ":
        imageUrl = "https://raw.githubusercontent.com/abelbrhanegebreslasie/Frends/main/image/rr.jpg";
        break;
      case "ጥብስ":
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/image/uu.jpg";
        break;
      case "በያይነቱ":
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/image/hhh.jpg";
        break;
      case "ሽሮ":/*ኣብዚ ስማት space ከይትሓድግ ኣብነት "Salmon" ዝነበረ "Salmon " ተጌርካዮ ኣይሰርሐልካን ። */
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/image/pp.jpg";
        break;


        case "ለስላሳ":
        imageUrl = "https://raw.githubusercontent.com/abelbrhanegebreslasie/Frends/main/image/sss.jpg";
        break;
      case "ወተት":
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/image/tt.jpg";
        break;
      case "የቾከሌት ኬክ":
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/image/ggg.jpg";
        break;
      case "ስትሮበሪ ኬክ":
        imageUrl = "https://raw.githubusercontent.com/AbelBrhaneGebreslasie/Frends/main/image/rrr.jpg";
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
