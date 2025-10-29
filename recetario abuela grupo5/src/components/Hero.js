import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Los Sabores de mi Abuela</h1>
        <p>
          Preservando las recetas familiares de San Juan, República Dominicana. 
          Un viaje culinario a través de generaciones de tradición y amor.
        </p>
        <div className="hero-decoration">
          <span>🍚</span>
          <span>🍮</span>
          <span>🍌</span>
          <span>🌽</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;