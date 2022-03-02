import React from 'react'
import Hero from "../assets/images/hero.jpg";
import "../css/Blog.css";

const Blog = () => {
  return (
    <section id="blog" className="blog flex-columns flex-reverse">
      <div className="row">
        <div className="column">
          <div className="column-1">
            <img src={Hero} alt="radio" />
          </div>
        </div>
        <div className="column">
          <div className="column-2 bg-secondary">
            <h4>Side hustle</h4>
            <h2>Medium articles</h2>
            <p>
              I write articles on Medium, In subjects I would like to learn. I
              find it helps me understand new topics at hand, I also find that
              it helps other people understand dense subjects when trying to
              explain it in my own words.
            </p>
            <a
              href="https://jonbleibdrey.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fas fa-chevron"></i>
              Read Medium Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog