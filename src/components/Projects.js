import React from 'react'
import "../css/Project.css";
import Hero from "../assets/images/hero.jpg";

const Projects = () => {
  return (
    <section id="portfolio" className="cases flex-grid section-padding">
    <header className="section-header">
      <h4>What I've worked on...</h4>
      <h2>Portfolio</h2>
      <p>
        I try to practice broad projects, as well as consistently producing
        new projects, and I also remember to keep it light.
      </p>
    </header>
    <div className="row">
      <div className="column">
        <a
          href="https://affectionate-agnesi-a20650.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Hero} alt="look up" />
        </a>
        <a
          href="https://yumyumfresh.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Hero} alt=" yum yum" />
        </a>
      </div>
      <div className="column">
        <a
          href="https://blissful-northcutt-caae64.netlify.app/"
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
      <div className="column">
        <a href="https://fake-fun.web.app" target="_blank" rel="noopener noreferrer">
          <img src={Hero} alt=" google" />
        </a>
        <a
          href="https://tinder-clone-9d53e.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Hero} alt="president" />
        </a>
      </div>
      <div className="column">
        <a
          href="https://zen-hopper-ce8178.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Hero} alt="robot" />
        </a>
        <a
          href="https://github.com/jonbleibdrey/rails_food_truck_review"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Hero} alt=" foodtruck" />
        </a>
      </div>
    </div>
  </section>
  )
}

export default Projects