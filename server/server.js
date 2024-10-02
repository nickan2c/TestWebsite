const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the CORS package

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());


// Define lists of ingredients
const badIngredients = [
  "BHA", "BHT", "MSG", "Sodium Nitrate", "Preservative E202", // Add more bad preservatives
];

const weirdIngredients = [
  "Dextrose", "Sucralose", "Aspartame", "Propylene Glycol", "High Fructose Corn Syrup", // Add more weird ingredients
];

// Endpoint to check ingredients
app.post('/api/check', (req, res) => {
  const { ingredients } = req.body;

  // Split the ingredients list and trim whitespace
  const ingredientList = ingredients.split(',').map(item => item.trim());
  const badList = [];
  const weirdList = [];
  const goodList = [];

  // Classify ingredients
  ingredientList.forEach(ingredient => {
    if (badIngredients.includes(ingredient)) {
      badList.push(ingredient);
    } else if (weirdIngredients.includes(ingredient)) {
      weirdList.push(ingredient);
    } else {
      goodList.push(ingredient);
    }
  });

  // Send the categorized results back
  res.json({
    bad: badList,
    weird: weirdList,
    good: goodList,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
