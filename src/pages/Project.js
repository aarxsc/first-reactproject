import React from "react";
import OJT from "../assets/OJT.png";
import Payroll from "../assets/Payroll.png";
import TBA from "../assets/tba.jpeg";
import "./Project.css";

function Profile() {
  return (
    <section className="featured-work">
      <div className="featured-header">
        <h2>
          Featured <span className="italic">Projects</span>
        </h2>
        <p>
          Some projects are from my previous year and some are just hobbies. 
          Positive change with a website and brand that spreads your message.
          Explore my work.
        </p>
      </div>

      <div className="project-grid">
        <div className="project-card">
          <img src={Payroll} alt="Payroll" />
          <div className="overlay">
            <a
              href="https://www.figma.com/proto/aoHED0JFLqNqdaNnHRpvSW/LEAVE?page-id=0%3A1&node-id=1183-4128&viewport=-255%2C1355%2C0.42&t=BxXzxoNCtWxrlKTT-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1183%3A4128"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View project
            </a>
          </div>
          <div className="project-info">
            <h3></h3>
            <div className="project-tags">
              <span className="project-tag">Leave & Payroll System</span>
              <span className="project-tag">UI/UX</span>
              <span className="project-tag">Website Development</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={OJT} alt="OJT" />
          <div className="overlay">
            <a
              href="https://www.figma.com/proto/4ZNCPHrWGtkvXmBTRyHgL2/OJT-System?page-id=99%3A506&node-id=127-2325&p=f&viewport=-3000%2C161%2C0.51&t=wUoby7p7dWfx8E9k-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=127%3A2325"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View project
            </a>
          </div>
          <div className="project-info">
            <h3></h3>
            <div className="project-tags">
              <span className="project-tag">TBA</span>
              <span className="project-tag">OJT System</span>
              <span className="project-tag">UI/UX</span>
              <span className="project-tag">Website Development</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={TBA} alt="tba" />
          <div className="overlay">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View project
            </a>
          </div>
          <div className="project-info">
            <h3></h3>
            <div className="project-tags">
              <span className="project-tag">TBA</span>
              <span className="project-tag">Graphic Design</span>
              <span className="project-tag">Canva</span>
            </div>
          </div>
        </div>

        {/* --- Project 2 --- */}
        <div className="project-card">
          <img src={TBA} alt="tba" />
          <div className="overlay">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View project
            </a>
          </div>
          <div className="project-info">
            <h3></h3>
            <div className="project-tags">
              <span className="project-tag">TBA</span>
              <span className="project-tag">Graphic Design</span>
              <span className="project-tag">Canva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
