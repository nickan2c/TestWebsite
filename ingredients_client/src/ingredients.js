// ingredients.js
import ingredientsData from './data/ingredients.json';

// Function to categorize ingredients
const categorizeIngredients = (input) => {
  const ingredientList = input.split(',').map(item => item.trim());
  const categorized = {
    bad: [],
    weird: [],
    good: [],
  };

  ingredientList.forEach(ingredient => {
    if (ingredientsData.badIngredients.includes(ingredient)) {
      categorized.bad.push(ingredient);
    } else if (ingredientsData.weirdIngredients.includes(ingredient)) {
      categorized.weird.push(ingredient);
    } else if (ingredientsData.goodIngredients.includes(ingredient)) {
      categorized.good.push(ingredient);
    }
  });

  return categorized;
};

// Exporting the categorizeIngredients function
export { categorizeIngredients };
