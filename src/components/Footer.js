import React from 'react'
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
    <div className="social">
      <a
        href="facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a
        href="twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter fa-2x"></i>
      </a>
      <a
        href="instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <a
        href="github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
    <p>Copyright &copy; 2022 - Nataly Buns Bleibdrey</p>
  </footer>
  )
}

export default Footer