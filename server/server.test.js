// server.test.js
const request = require('supertest');
const express = require('express');
const cors = require('cors');

// Import your server file and create an instance
const app = express();
app.use(express.json());
app.use(cors());

// Sample endpoint for testing
app.post('/api/check', (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients) {
    return res.status(400).json({ error: 'Ingredients are required' });
  }

  // Sample ingredient categorization logic
  const badIngredients = ["BHA", "BHT", "MSG"];
  const weirdIngredients = ["Dextrose", "Sucralose"];
  const categorized = {
    bad: [],
    weird: [],
    good: [],
  };

  ingredients.split(',').forEach(ingredient => {
    const trimmedIngredient = ingredient.trim();
    if (badIngredients.includes(trimmedIngredient)) {
      categorized.bad.push(trimmedIngredient);
    } else if (weirdIngredients.includes(trimmedIngredient)) {
      categorized.weird.push(trimmedIngredient);
    } else {
      categorized.good.push(trimmedIngredient);
    }
  });

  return res.status(200).json(categorized);
});

// Test cases
describe('POST /api/check', () => {
  it('should categorize ingredients correctly', async () => {
    const response = await request(app)
      .post('/api/check')
      .send({ ingredients: 'BHA, Dextrose, Olive Oil, Sugar' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      bad: ['BHA'],
      weird: ['Dextrose'],
      good: ['Olive Oil', 'Sugar'],
    });
  });

  it('should return an error if no ingredients are provided', async () => {
    const response = await request(app)
      .post('/api/check')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Ingredients are required' });
  });
});
