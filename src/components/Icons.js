import React from 'react'
import '../css/Icons.css'

const Icons = () => {
  return (
    <section id="about" className="icons bg-light">
    <div className="flex-items">
      <div>
        <i className="fa-solid fa-person-running fa-2x"></i> 
        <div>
          <h3>Industy Expertise</h3>
          <p>
          I am an experienced pharmaceutical industry professional who has worked on integrated evidence and strategy planning. As well as helped develop IEGPs for specific assets working closely with cross-functional client teams.
          </p>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-user-group fa-2x"></i> 
        <div>
          <h3>Publications Planning</h3>
          <p>
          worked on observational study design, chart reviews, health outcomes, global value dossiers, integrated evidence strategic planning and has deep knowledge of coding within observational healthcare databases. 
          </p>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-spray-can-sparkles fa-2x"></i>
        <div>
          <h3>RWE Strategy</h3>
          <p>
          Experience in developing RWE vision, strategy and roadmaps. She also supports building a global center of excellence in setting up scientific standards for RWE research. 
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Icons