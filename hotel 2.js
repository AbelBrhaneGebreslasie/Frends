



const ingredients = {
  "Caesar Salad": {
    text: "Ingredients: Romaine Lettuce, Caesar Dressing, Croutons, Parmesan Cheese",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc7778e6627",
      "https://images.unsplash.com/photo-1581583902066-5ed4b6a5f4ba"
    ]
  },
  Omelette: {
    text: "Ingredients: Eggs, Milk, Cheese, Salt, Pepper",
    images: [
      "https://images.unsplash.com/photo-1587750051703-c6d1cf82f0f7",
      "https://images.unsplash.com/photo-1585238342028-4bbc2ceadf25",
      "https://images.unsplash.com/photo-1611721680731-f5cf7d9b1b9f"
    ]
  },
  Pancakes: {
    text: "Ingredients: Flour, Milk, Eggs, Syrup",
    images: [
      "https://images.unsplash.com/photo-1584270354949-0ec6efb84f9d",
      "https://images.unsplash.com/photo-1604908554163-e35f5aaea5a6",
      "https://images.unsplash.com/photo-1617196036555-972b1fd5bcf5"
    ]
  },
  Spaghetti: {
    text: "Ingredients: Spaghetti, Ground Beef, Tomato Sauce, Onion, Garlic",
    images: [
      "https://images.unsplash.com/photo-1589308078052-8e8f69f99cb0",
      "https://images.unsplash.com/photo-1604908811834-325df1eeaae3",
      "https://images.unsplash.com/photo-1592839711482-10778fefdb9e"
    ]
  },
  "Grilled Chicken": {
    text: "Ingredients: Chicken Breast, Olive Oil, Herbs, Lemon",
    images: [
      "https://images.unsplash.com/photo-1605478371440-bfc2f42c96c4"
    ]
  },
  Steak: {
    text: "Ingredients: Beef Steak, Salt, Pepper, Butter, Rosemary",
    images: [
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
    ]
  },
  Salmon: {
    text: "Ingredients: Salmon, Lemon, Dill, Olive Oil",
    images: [
      "https://images.unsplash.com/photo-1588167056546-279efb7ccedb"
    ]
  },
  Coffee: {
    text: "Ingredients: Coffee Beans, Water, Milk, Sugar",
    images: [
      "https://images.unsplash.com/photo-1587731451027-9c7d2e0bb049"
    ]
  },
  "Orange Juice": {
    text: "Ingredients: Fresh Oranges",
    images: [
      "https://images.unsplash.com/photo-1587241446025-54c0da6411d8"
    ]
  },
  "Chocolate Cake": {
    text: "Ingredients: Chocolate, Flour, Eggs, Sugar, Butter",
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    ]
  },
  "Ice Cream": {
    text: "Ingredients: Cream, Sugar, Vanilla, Milk",
    images: [
      "https://images.unsplash.com/photo-1587242638969-415366c23904"
    ]
  }
};

function showIngredients(dish) {
  document.getElementById("dish-name").innerText = dish;
  document.getElementById("ingredients-text").innerText = ingredients[dish].text;

  const imgContainer = document.getElementById("ingredients-images");
  imgContainer.innerHTML = "";
  ingredients[dish].images.forEach(src => {
    const img = document.createElement("img");
    img.src = src + "?w=200";
    img.className = "ingredient-img";
    imgContainer.appendChild(img);
  });

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function searchMenu() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const name = item.getAttribute("data-name").toLowerCase();
    item.style.display = name.includes(input) ? "" : "none";
  });
}

// Add event listener to the food item to show ingredients (existing functionality)
const foodItems = document.querySelectorAll('.item');
foodItems.forEach(item => {
  item.addEventListener('click', function() {
    const dishName = item.getAttribute("data-name");
    showIngredients(dishName); // Show ingredients when the item is clicked
  });
});

// Add event listener to the food image container to show full image
const foodImages = document.querySelectorAll('.food-image');
foodImages.forEach(image => {
  image.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent modal from opening when clicking image
    const foodName = image.parentElement.getAttribute("data-name");
    const foodImage = ingredients[foodName].images[0]; // Get the first image of the food
    showFullImage(foodImage); // Show full image in modal
  });
});

// Function to show the food image in full screen in a modal
function showFullImage(imageSrc) {
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '1000';

  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.maxWidth = '80%';
  img.style.maxHeight = '80%';
  img.style.objectFit = 'contain';
  img.style.borderRadius = '10px';

  modal.appendChild(img);
  document.body.appendChild(modal);

  // Close the modal when clicked
  modal.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}
