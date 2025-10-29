import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/animations.css';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <main className="main-content">
        {selectedRecipe ? (
          <RecipeDetail 
            recipe={selectedRecipe} 
            onBack={() => setSelectedRecipe(null)}
          />
        ) : (
          <RecipeList onSelectRecipe={setSelectedRecipe} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;