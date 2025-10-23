import React from "react";
import './Footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <p>
                   ©  {new Date().getFullYear()} <strong>Athara M. Malacay</strong>. All Rights Reserved
                </p>

                <div className="footer-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer