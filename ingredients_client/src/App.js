import React, { useState } from "react";
import './App.css';
import { categorizeIngredients } from './ingredients'; // Import only the function

function App() {
  const [ingredients, setIngredients] = useState("");
  const [bad, setBad] = useState([]);
  const [weird, setWeird] = useState([]);
  const [good, setGood] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  // State to manage visibility of ingredient lists
  const [isBadOpen, setIsBadOpen] = useState(false);
  const [isWeirdOpen, setIsWeirdOpen] = useState(false);
  const [isGoodOpen, setIsGoodOpen] = useState(false);

  const handleSubmit = () => {
    setErrorMessage("");
    setIsChecked(false);
    setBad([]);
    setWeird([]);
    setGood([]);

    if (!ingredients.trim()) {
      setErrorMessage("You need to add some ingredients first.");
      return;
    }

    // Use the categorizeIngredients function from the imported module
    const result = categorizeIngredients(ingredients);
    setBad(result.bad);
    setWeird(result.weird);
    setGood(result.good);
    setIsChecked(true);
  };

  return (
    <div className="container">
      <h1>Ingredients Checker</h1>

      <textarea
        placeholder="Enter ingredients list..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <button onClick={handleSubmit}>Check Ingredients</button>

      {errorMessage && <p className="error">{errorMessage}</p>}

      {isChecked && (
        <div className="results">
          {/* Bad Ingredients Section */}
          {bad.length > 0 && (
            <div>
              <h3 onClick={() => setIsBadOpen(!isBadOpen)} className="toggle-header">
                Bad Ingredients {isBadOpen ? '-' : '+'}
              </h3>
              {isBadOpen && (
                <ul className="bad">
                  {bad.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Weird Ingredients Section */}
          {weird.length > 0 && (
            <div>
              <h3 onClick={() => setIsWeirdOpen(!isWeirdOpen)} className="toggle-header">
                Weird Ingredients {isWeirdOpen ? '-' : '+'}
              </h3>
              {isWeirdOpen && (
                <ul className="weird">
                  {weird.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Good Ingredients Section */}
          {good.length > 0 && (
            <div>
              <h3 onClick={() => setIsGoodOpen(!isGoodOpen)} className="toggle-header">
                Good Ingredients {isGoodOpen ? '-' : '+'}
              </h3>
              {isGoodOpen && (
                <ul className="good">
                  {good.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Message if no bad or weird ingredients are found */}
          {bad.length === 0 && weird.length === 0 && good.length > 0 && (
            <p>No bad or weird ingredients found, you're good to go!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
