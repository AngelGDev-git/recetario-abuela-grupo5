import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <span>🥘</span>
          Sabores de mi Abuela
        </div>
        <button 
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </nav>
    </header>
  );
};

export default Header;