import React from "react";
import Myprofile from '../assets/Profile.jpeg'
import './Contact.css'

function Contact(){
    return(
        <section id="contact" className="contact-section">
        <div className="contact-container">
            

            <div className="contact-left">
            <h1>Let’s bring your <span className="italic">vision  </span>  to life</h1>

            <p>
                Reach out anytime — I’ll walk you through the process and make sure
                the project starts with clarity and confidence.
            </p>

            <div className="profile">
                <img
                src={Myprofile}
                alt="Profile"
                />
                <div className="profile-text">
                <h4>Athara M. Malacay</h4>
                <p>UI/UX Designer</p>
                </div>
            </div>
            </div>

        
            <div className="contact-right">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                
                <div className="form-group">
                <input type="text" id="name" placeholder="Name" required />
                </div>

                <div className="form-group">
                <input type="email" id="email" placeholder="E-mail" required />
                </div>

                <div className="form-group">
                <textarea
                    id="message"
                    rows="1"
                    placeholder="Message (Tell us about your project)"
                    required
                ></textarea>
                </div>

                <button type="submit" className="btn">Get in touch</button>
            </form>
            </div>
        </div>
        </section>

    );
}

export default Contact