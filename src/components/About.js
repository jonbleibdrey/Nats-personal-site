import React from 'react'
import Hero from "../assets/images/hero2.jpg";
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
          <h4>Career path information</h4>
          <h2>Healthcare Impact & Innovation</h2>
          <p>
            Master of public health in healthcare systems & policy, bachelors in biology & french literature
            <br/>
            worked at johnson & johnson, Pfizer, and Zs associates
            <br/>
            passionate about advancing women in stem
            <br/>
            <br/>
            <h6>To find out more, click below</h6>
          </p>
          <a
            href="https://github.com/jonbleibdrey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <i className="fas fa-chevron"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About