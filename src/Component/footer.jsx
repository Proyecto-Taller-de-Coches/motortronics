import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-row">
      <div className="footer-column">
        <h3>Dirección</h3>
        <p>Calle Metalurgia 30 <br/>         
        Polígono Calonge  <br/>
        41012 Sevilla</p>
      </div>
      <div className="footer-column">
        <h3>Contáctanos en </h3>
        <p>info@motortronic.es</p>
        <p>Teléfono: +123456789</p>
      </div>
      <div className="footer-column">
        <h3>Política de Privacidad</h3>
        <p>Condiciones de venta</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
