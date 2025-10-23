import React from "react";
import profile from "../assets/Profile.jpeg";
import Cat from "../assets/catto.png";
import "./Profile.css";

function Profile() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Thraia_Damps_CV.pdf"; // File path in public folder
    link.download = "Thraia_Damps_CV.pdf";
    link.click();
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-image-container">
          <img src={Cat} alt="catto" className="portfolio-image-right" />
        </div>

        {/* Right Side - Text + Button */}
        <div className="portfolio-content">
          <button onClick={handleDownload} className="projects">
            Get my CV
          </button>

          <div className="portfolio-title">
            <div className="title-top">PORT</div>
            <div className="title-bottom">FOLIO</div>
          </div>

          <div className="portfolio-subtext">
            <p className="tagline">
              A <span className="italic">Visual</span> Portfolio <br />
              UI/UX <span className="italic">Designer</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
