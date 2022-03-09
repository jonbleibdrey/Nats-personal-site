import React from "react";
import '../css/Heropage.css'

const HeroPage = () => {
  return (
    <div id="hero" className="content">
      <h1>Real World Evidence | Strategy | Innovation</h1>
      <p>"Passion for data innovation to make an impact on patient's lives"</p>
      <a
        href="https://www.linkedin.com/in/jonathan-bleibdrey-4032171b9/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <i className="fas fa-chevron-right"></i> More About Me
      </a>
    </div>
  );
};

export default HeroPage;
