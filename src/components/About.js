import React from 'react'
import Hero from "../assets/images/hero.jpg";
import "../css/About.css";

const About = () => {
  return (
    <section className="solutions flex-columns">
    <div className="row">
      <div className="column">
        <div className="column-1">
          <img src={Hero} alt="buddha" />
        </div>
      </div>
      <div className="column">
        <div className="column-2 bg-primary">
          <h4>I am what you are looking for.</h4>
          <h2>I get things done!</h2>
          <p>
            I am a capricorn with a strong sense of direction, I have a work
            ethic that no one can compare too, and Im reliable.
            <br />
            Link below for github information.
          </p>
          <a
            href="https://github.com/jonbleibdrey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <i className="fas fa-chevron"></i>
            Github Here
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About