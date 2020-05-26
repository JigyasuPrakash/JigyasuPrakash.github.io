import React from 'react'
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CodeChef from '../img/codechef.png';
import CodeForces from '../img/codeforces.png';
import HackerEarth from '../img/hackerearth.png';

function More() {
    return (
        <div className="page">
            <section>
                <div className="section-title">
                    <h1><u>More</u></h1>
                </div>
                <div className="section-info">
                    <p>If you like my work and want to connect with me, than make sure you follow me on my
                    social and other handle</p>
                    <table className="table table-hover" style={{ color: "white" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Platform</th>
                                <th scope="col">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Facebook</td>
                                <td><a href="https://www.facebook.com/jigyasu.prakash.5" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon size="lg" icon={faFacebookF} /></a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Instagram</td>
                                <td><a href="https://www.instagram.com/jprak_arts" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon size="lg" icon={faInstagram} /></a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>LinkedIn</td>
                                <td><a href="https://www.linkedin.com/in/jigyasuprakash/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon size="lg" icon={faLinkedin} /></a></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Twitter</td>
                                <td><a href="https://twitter.com/jigyasu1505" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon size="lg" icon={faTwitter} /></a></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>GitHub</td>
                                <th><a href="https://github.com/JigyasuPrakash" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon size="lg" icon={faGithub} /></a></th>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>HackerRank</td>
                                <td><a href="https://www.hackerrank.com/jigyasuprakash3" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon size="lg" icon={faHackerrank} /></a></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>HackerEarth</td>
                                <td>
                                    <a href="https://www.hackerearth.com/@jigyasuprakash3" target="_blank" rel="noopener noreferrer"><img
                                        src={HackerEarth} alt="hackerrank" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>CodeChef</td>
                                <td>
                                    <a href="https://www.codechef.com/users/jprak121" target="_blank" rel="noopener noreferrer"><img
                                        src={CodeChef} alt="codechef" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>CodeForces</td>
                                <td>
                                    <a href="http://codeforces.com/profile/Jprak121" target="_blank" rel="noopener noreferrer"><img
                                        src={CodeForces} style={{ backgroundColor: "white", padding: "1px" }} alt="codeforces" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Sourcerer</td>
                                <td>
                                    <a href="https://sourcerer.io/jprak121" target="_blank" rel="noopener noreferrer"><img
                                        src="https://sourcerer.io/icons/logo-sharing.svg" height="20px" alt="Sourcerer" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Mail</td>
                                <td><a href="mailto: jprakash150599@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon size="lg" icon={faEnvelope} />
                                </a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
            <Footer />
        </div>
    )
}

export default More