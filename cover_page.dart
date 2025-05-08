<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to the Hotel</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
  <style>
    body {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 100vh;
      margin:0px;
      background: linear-gradient(-45deg, black, #02bbf8, white);
      font-family: 'Playfair Display', serif;
    }

    .welcome-text {
      font-size: 3em;
      font-weight: 700;
      color: #003366;
      margin-bottom: 20px;
      margin-top: 5vh;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      letter-spacing: 1px;
      text-shadow: 4px -4px 4px rgba(0, 0, 0, 0.5); /* Increased text shadow length */
      
    }

    .image-container {
      background-color: antiquewhite;
      width: 80vw;
      height: 40vw;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      margin: 20px;
      border: 2px solid white; /* Added border */
      box-shadow: 10px -20px 5px rgba(0, 0, 0, 0.5); /* Increased shadow length */   
     }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  </style>
</head>
<body>
  <div id="curved-text" class="welcome-text">Welcome to the Hotel</div>
  <div class="image-container">
    <img src="https://raw.githubusercontent.com/abelbrhanegebreslasie/Frends/main/image/sss.jpg" alt="Hotel Image" />
  </div>

  <!-- CircleType.js for curved text -->
  <script src="https://cdn.jsdelivr.net/npm/circletype@2.3.0/dist/circletype.min.js"></script>
  <script>
    new CircleType(document.getElementById('curved-text')).radius(500);

    setTimeout(function() {
      window.location.href = 'index.html';
    }, 500000);
  </script>
</body>
</html>
