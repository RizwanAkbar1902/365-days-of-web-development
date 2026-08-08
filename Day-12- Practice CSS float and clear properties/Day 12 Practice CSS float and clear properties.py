

<!--
    Day 11 - Pet World Journal

    This project is about practicing CSS float and clear properties.
    I used float to create two columns and to wrap text around images.
    I also used clear to place the footer below the floated sections.
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pets Blog - Display & Float Practice</title>
  <style>
    /* Basic Reset */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f4f4f9;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    /* 1. Columns layout using Float & Display */
    .column {
      width: 48%; /* Screen ka aadha hissa */
      background-color: #ffffff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .cat-card {
      float: left; /* Screen ke left side par */
      border-top: 5px solid aquamarine;
    }

    .dog-card {
      float: right; /* Screen ke right side par */
      border-top: 5px solid coral;
    }

    /* 2. Image and Text Wrapping using Float & Baseline Fix */
    .card-img {
      float: left; /* Image par float lagayein taake text wrap ho */
      width: 120px;
      height: 120px;
      margin-right: 15px;
      margin-bottom: 10px;
      object-fit: cover;
      border-radius: 6px;
    }

    .card-title {
      margin-bottom: 10px;
      color: #2c3e50;
    }

    .card-text {
      font-size: 1em;
      line-height: 1.6;
      color: #555;
    }

    /* 3. Footer Fix using Clear: Both */
    footer {
      clear: both; /* Floated elements ke neeche bhejne ke liye */
      text-align: center;
      padding: 15px;
      margin-top: 30px;
      background-color: #2c3e50;
      color: #ffffff;
      border-radius: 6px;
    }
  </style>
</head>
<body>

  <h1>Pet World Journal</h1>

  <!-- Left Column (Cat Card) -->
  <div class="column cat-card">
    <h2 class="card-title">Cat Section</h2>
    <!-- Apni cat image ka path src mein daalein -->
    <img src="cat.jpeg" alt="Cat Image" class="card-img">
    <p class="card-text">
      Nap all day cat dog hate mouse eat string barf pillow no baths hate everything but kitty poochy. 
      Sleep on keyboard toy mouse squeak roll over. Mesmerizing birds. Poop on grasses licks paws 
      destroy couch intently sniff hand.
    </p>
  </div>

  <!-- Right Column (Dog Card) -->
  <div class="column dog-card">
    <h2 class="card-title">Dog Section</h2>
    <!-- Apni dog image ka path src mein daalein -->
    <img src="dog.jpeg" alt="Dog Image" class="card-img">
    <p class="card-text">
      Heckin good boys and girls long woofer big ol wow very biscit long woofer heck what a nice floof, 
      long doggo noodle horse vvv very taste wow. Very taste wow many pats aqua doggo he made many 
      woofs pupperino, puggo doing me a frighten.
    </p>
  </div>

  <!-- Footer -->
  <footer>
    <p>© 2026 Pet Journal. Built with Float, Display & Clear properties.</p>
  </footer>

</body>
</html>