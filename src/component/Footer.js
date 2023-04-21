import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const myDate = "22nd April, 2023"

function Footer() {
    return (
        <section className="footer">
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://facebook.com/jigyasu.prakash.5"><FontAwesomeIcon icon={faFacebookF} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://github.com/JigyasuPrakash"><FontAwesomeIcon icon={faGithub} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jigyasu_prakash5/"><FontAwesomeIcon icon={faInstagram} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/jigyasuprakash"><FontAwesomeIcon icon={faLinkedin} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="mailto:jigyasuprakash3@gmail.com"><FontAwesomeIcon icon={faEnvelope} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://twitter.com/jigyasu1505"><FontAwesomeIcon icon={faTwitter} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://youtube.com/channel/UC-pAEbfVdLPIW6YjXvnnXZw"><FontAwesomeIcon icon={faYoutube} color="white" size="lg" /></a>
            <footer style={{ marginTop: "20px" }}>
                Last Updated: {myDate}
            </footer>
        </section>
    )
}

export default Footer
