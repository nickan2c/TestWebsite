import React from 'react';
import './App.css'; // Importing the stylesheet

// todo make the tooltip get a value from a map to its corresponding tooltip eg "xantham gum" ->  "a man made thickening agent"
const IngredientBox = ({ ingredient, category, tooltip }) => {
  // Choose color based on the category todo can be done better wtf is this
  const boxClass =
    category === 'harmful' ? 'box-harmful' :
    category === 'questionable' ? 'box-questionable' : 
    'box-safe';

  return (
    <div className={`ingredient-box ${boxClass}`}>
      {ingredient}
      {/* Info icon and tooltip */}
      <div className="info-icon-container">
        <span className="info-icon">i</span>
        <span className="tooltip">{tooltip}</span>
      </div>
    </div>
  );
};

export default IngredientBox;
