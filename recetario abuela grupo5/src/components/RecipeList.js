import React from 'react';
import { recipes } from '../data/recipes';

const RecipeList = ({ onSelectRecipe }) => {
  return (
    <section className="recipe-list">
      <div className="container">
        <h2>Nuestras Recetas Tradicionales</h2>
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <div 
              key={recipe.id} 
              className="recipe-card"
              onClick={() => onSelectRecipe(recipe)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="recipe-image-container">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="recipe-image"
                />
                <div className="recipe-overlay">
                  <span className="view-recipe">Ver Receta →</span>
                </div>
              </div>
              <div className="recipe-info">
                <h3>{recipe.name}</h3>
                <div className="recipe-meta">
                  <span className="prep-time">⏱️ {recipe.prepTime}</span>
                  <span className={`difficulty ${recipe.difficulty.toLowerCase()}`}>
                    {recipe.difficulty}
                  </span>
                </div>
                <p className="recipe-preview">
                  {recipe.story.substring(0, 120)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeList;