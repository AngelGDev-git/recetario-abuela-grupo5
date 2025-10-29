import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🥘 Sabores de mi Abuela</h3>
            <p>
              Preservando la tradición culinaria dominicana, 
              una receta a la vez. Este proyecto honra la memoria 
              de nuestras abuelas y su legado gastronómico.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>📍 San Juan de la Maguana</h4>
            <p>
              Tierra de tradiciones y sabores auténticos. 
              Donde cada receta cuenta una historia de familia y comunidad.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>👵 La Tradición Continúa</h4>
            <p>
              "Cocinar con amor es preservar nuestra identidad. 
              Cada sabor es un pedacito de nuestra historia dominicana."
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Sabores de mi Abuela - Grupo 5. Todos los derechos reservados.</p>
          <p>Proyecto educativo para preservar la cultura gastronómica dominicana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;