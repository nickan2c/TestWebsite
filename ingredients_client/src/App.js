import React, { useState } from 'react';
import ingredientsData from './data/ingredients';
import IngredientBox from './IngredientBox';
import './App.css';

const Collapsible = ({ title, children, isOpen, toggleOpen }) => {
  return (
    <div>
      <button onClick={toggleOpen} className="collapsible-button">
        {isOpen ? 'Hide' : 'Show'} {title}
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

const App = () => {
  const [inputText, setInputText] = useState('');
  const [categories, setCategories] = useState({
    harmful: [],
    questionable: [],
    safe: [],
  });
  const [showCollapsibles, setShowCollapsibles] = useState(false); // Track if collapsibles should be shown
  const [allOpen, setAllOpen] = useState(true); // Track if all collapsibles should be open or closed

  // Function to classify ingredients
  const classifyIngredients = () => {
    const inputIngredients = inputText.toLowerCase().split(',').map(item => item.trim());

    const harmful = inputIngredients.filter(ingredient =>
      ingredientsData.harmful.map(ingredient => ingredient.toLowerCase())
  .includes(ingredient)
    );
    const questionable = inputIngredients.filter(ingredient =>
      ingredientsData.questionable.map(ingredient => ingredient.toLowerCase())
      .includes(ingredient)
    );
    const safe = inputIngredients.filter(
      ingredient => !harmful.includes(ingredient) && !questionable.includes(ingredient)
    );

    setCategories({
      harmful,
      questionable,
      safe,
    });

    // Show collapsibles and open all after classification
    setShowCollapsibles(true);
    setAllOpen(true);
  };

  // Handle key press to trigger classification when Enter is pressed
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents newline in the textarea
      classifyIngredients();
    }
  };

  // Toggle all collapsibles open or closed
  const toggleAll = () => {
    setAllOpen(!allOpen);
  };

  return (
    <div className="container">
      <h1>Ingredient Classifier</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter ingredients separated by commas"
        className="input-textarea"
      />
      <button onClick={classifyIngredients} className="classify-button">
        Classify
      </button>

      {showCollapsibles && (
        <>
          {/* Expand/Collapse all buttons */}
          <button onClick={toggleAll} className="toggle-all-button">
            {allOpen ? 'Close All' : 'Expand All'}
          </button>

          <Collapsible
            title="Harmful Ingredients"
            isOpen={allOpen}
            toggleOpen={() => setAllOpen(!allOpen)}
          >
            {categories.harmful.length > 0 ? (
              categories.harmful.map((ingredient, index) => (
                <IngredientBox key={index} ingredient={ingredient} category="harmful" tooltip="Harmful ingredient" />
              ))
            ) : (
              <p>No harmful ingredients found.</p>
            )}
          </Collapsible>

          <Collapsible
            title="Questionable Ingredients"
            isOpen={allOpen}
            toggleOpen={() => setAllOpen(!allOpen)}
          >
            {categories.questionable.length > 0 ? (
              categories.questionable.map((ingredient, index) => (
                <IngredientBox key={index} ingredient={ingredient} category="questionable" tooltip="Questionable ingredient" />
              ))
            ) : (
              <p>No questionable ingredients found.</p>
            )}
          </Collapsible>

          <Collapsible
            title="Safe Ingredients"
            isOpen={allOpen}
            toggleOpen={() => setAllOpen(!allOpen)}
          >
            {categories.safe.length > 0 ? (
              categories.safe.map((ingredient, index) => (
                <IngredientBox key={index} ingredient={ingredient} category="safe" tooltip="Safe ingredient" />
              ))
            ) : (
              <p>All ingredients are safe!</p>
            )}
          </Collapsible>
        </>
      )}
    </div>
  );
};

export default App;
