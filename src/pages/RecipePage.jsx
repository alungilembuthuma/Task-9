import React, { useState } from 'react';
import Footer from '../components/Footer';
import axios from 'axios'; // add axios for making API requests

export default function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState('');

  const handleAddRecipe = async (index) => {
    // Create a new recipe object
    const newRecipeObj = { title: newRecipe, ingredients: [], instructions: [] };

    // Send a POST request to the endpoint to save the new recipe
    try {
      const response = await axios.post('http://localhost:3001/recipes', newRecipeObj);
      const newRecipeId = response.data.id;

      // Update the local state with the new recipe
      setRecipes([...recipes, newRecipeObj]);

      // Clear the new recipe input field
      setNewRecipe('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='main' style={{ backgroundColor: "#79c1c2", width: "100vw", height: "100vh", margin: "0", position: "fixed" }}>
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "38%" }}>Recipes</h1>
      <div className="recipe-grid">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="recipe-square">
            {recipes[index] ? (
              <div>
                <h2>{recipes[index].title}</h2>
                <p>Ingredients: {recipes[index].ingredients.join(', ')}</p>
                <p>Instructions: {recipes[index].instructions.join(', ')}</p>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  value={newRecipe}
                  onChange={(e) => setNewRecipe(e.target.value)}
                  placeholder="Enter recipe title"
                />
                <div className="plus-sign" onClick={() => handleAddRecipe(index)}>+</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}