import React from "react";
import "../css/Project.css";
import Hero from "../assets/images/hero.jpg";
import Pdf1 from '../assets/document/pub1.pdf';
import Pdf2 from '../assets/document/pub2.pdf';
import Pdf3 from '../assets/document/pub3.pdf';

const Projects = () => {
  return (
    <section id="publications" className="cases flex-grid section-padding">
      <header className="section-header">
        <h4>What I've worked on...</h4>
        <h2>Publications</h2>
        <p>
          These are my publications so far:
        </p>
      </header>
      <div className="row">
        <div className="column">
          <a
            href={Pdf1}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Hero} alt="download" />
          </a>
          <a
            href={Pdf2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Hero} alt=" yum yum" />
          </a>
        </div>
        <div className="column">
          <a
            href={Pdf3}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Hero} alt="todo" />
          </a>
          <a
            href="https://eloquent-benz-ba9740.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Hero} alt="read by humans" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
