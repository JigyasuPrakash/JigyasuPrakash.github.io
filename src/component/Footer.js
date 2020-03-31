import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import {} from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const myDate = "26th March, 2020"

function Footer() {
    return (
        <section className="footer">
            <a className="iconBox" target="_blank" href="https://facebook.com/jigyasu.prakash.5"><FontAwesomeIcon icon={faFacebookF} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" href="https://github.com/JigyasuPrakash"><FontAwesomeIcon icon={faGithub} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" href="https://www.instagram.com/jigyasu_prakash5/"><FontAwesomeIcon icon={faInstagram} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" href="https://linkedin.com/in/jigyasuprakash"><FontAwesomeIcon icon={faLinkedin} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" href="mailto:ask@itsjigyasu.me"><FontAwesomeIcon icon={faEnvelope} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" href="https://twitter.com/jigyasu1505"><FontAwesomeIcon icon={faTwitter} color="white" size="lg" /></a>
            <a className="iconBox" target="_blank" href="https://youtube.com/channel/UC-pAEbfVdLPIW6YjXvnnXZw"><FontAwesomeIcon icon={faYoutube} color="white" size="lg" /></a>
            <footer style={{ marginTop: "20px" }}>
                Last Updated: {myDate}
            </footer>
        </section>
    )
}

export default Footer
