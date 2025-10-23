import React from "react";
import Profile from '../assets/Profile.jpeg'
import Cal from "../assets/calcifer.png"
import './About.css'

function About(){
    return(
        <section id="about" className="about-section">
            <div className="about-content">
                <h1 className="about-title">
                    <span className="about-text-highlight">ABO</span>
                    <span className="about-u-container">
                        <img src={Cal} alt="calcifer" className="profile-image" />
                        <span className="about-clear">U</span>
                    </span>
                    <span className="about-text-highlight">T</span> ME
                </h1>

                <div className="about-roles">
                    <span className="role">GRAPHIC DESIGNER</span>
                    <span className="role">UI/UX DESIGNER</span>
                </div>

                <div className="about-info">
                    <div className="info-left">
                        <div className="info-item">
                            <span className="icon">📍</span>
                            <p>DANAO CITY<br />CEBU<br />PHILIPPINES</p>
                        </div>
                    </div>

                    <div className="info-right">
                        <div className="info-item">
                            <span className="icon">👤</span>
                            <p>
                                ATHARA M. MALACAY<br />
                                09260817311<br />
                                MALACAYATHARA7@GMAIL.COM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About