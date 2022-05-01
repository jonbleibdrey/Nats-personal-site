import React from 'react'
import Hero from "../assets/images/hero1.jpg";

const Team = () => {
  return (
    <section id="team" className="team section-padding">
    <div className="flex-items">
      <div>
        <img src={Hero} alt="jon" />
        <h4>Nataly Patino Bleibdrey</h4>
        <p>RWE Strategy and operations consultant</p>
      </div>
    </div>
  </section>
  )
}

export default Team