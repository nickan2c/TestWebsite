const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors()); // To allow requests from React front-end
app.use(express.json());

// Mock list of "weird" ingredients
const badIngredientsList = [
  "Butylated Hydroxyanisole",
  "Sodium Benzoate",
  "Polysorbate 80",
  "Artificial Flavor",
  "Maize"
];
const weirdIngredientsList = [
  "Dextrose"
];

// API route to check ingredients
app.post("/api/check", (req, res) => {
  const { ingredients } = req.body;
  const userIngredients = ingredients.split(",").map(ing => ing.trim());
  const weird = userIngredients.filter((ing) => weirdIngredientsList.includes(ing));
  res.json({ weird });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
