import React from 'react';

const RecipeDetail = ({ recipe, onBack }) => {
  return (
    <section className="recipe-detail">
      <div className="container">
        <button className="back-button" onClick={onBack}>
          ← Volver al recetario
        </button>
        
        <div className="detail-content">
          <div className="detail-header">
            <h1>{recipe.name}</h1>
            <div className="recipe-meta-large">
              <span>⏱️ Tiempo: {recipe.prepTime}</span>
              <span>📊 Dificultad: {recipe.difficulty}</span>
            </div>
          </div>

          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="detail-image"
          />

          <div className="detail-grid">
            <div className="ingredients-section">
              <h3>🛒 Ingredientes</h3>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="steps-section">
              <h3>👩‍🍳 Preparación</h3>
              <ol className="steps-list">
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="story-section">
            <h3>📖 La Historia de esta Receta</h3>
            <p>{recipe.story}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetail;