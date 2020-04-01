import React from 'react'
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faLinkedin, faYoutube, faHackerrank } from '@fortawesome/free-brands-svg-icons';
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
                    <table class="table table-hover" style={{ color: "white" }}>
                        <thead>
                            <tr sty>
                                <th scope="col">#</th>
                                <th scope="col">Platform</th>
                                <th scope="col">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">Facebook</th>
                                <th scope="col"><a href="https://www.facebook.com/jigyasu.prakash.5" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={faFacebookF} /></a></th>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <th scope="col">Instagram</th>
                                <th scope="col"><a href="https://www.instagram.com/jprak_arts" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={faInstagram} /></a></th>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <th scope="col">LinkedIn</th>
                                <th scope="col"><a href="https://www.linkedin.com/in/jigyasuprakash/" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={faLinkedin} /></a></th>
                            </tr>
                            <tr>
                                <th scope="col">4</th>
                                <th scope="col">Twitter</th>
                                <th scope="col"><a href="https://twitter.com/jigyasu1505" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={faTwitter} /></a></th>
                            </tr>
                            <tr>
                                <th scope="col">5</th>
                                <th scope="col">Github</th>
                                <th scope="col"><a href="https://github.com/JigyasuPrakash" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={faGithub} /></a></th>
                            </tr>
                            <tr>
                                <th scope="col">6</th>
                                <th scope="col">HackerRank</th>
                                <th scope="col"><a href="https://www.hackerrank.com/jigyasuprakash3" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={faHackerrank} /></a></th>
                            </tr>
                            <tr>
                                <th scope="col">7</th>
                                <th scope="col">HackerEarth</th>
                                <th scope="col">
                                    <a href="https://www.hackerearth.com/@jigyasuprakash3" target="_blank"><img
                                        src={HackerEarth} /></a>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">8</th>
                                <th scope="col">CodeChef</th>
                                <th scope="col">
                                    <a href="https://www.codechef.com/users/jprak121" target="_blank"><img
                                        src={CodeChef} /></a>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">9</th>
                                <th scope="col">CodeForces</th>
                                <th scope="col">
                                    <a href="http://codeforces.com/profile/Jprak121" target="_blank"><img
                                        src={CodeForces} style={{ backgroundColor: "white", padding: "1px" }} /></a>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">10</th>
                                <th scope="col">Sourcerer</th>
                                <th scope="col">
                                    <a href="https://sourcerer.io/jprak121" target="_blank"><img
                                        src="https://sourcerer.io/icons/logo-sharing.svg" height="20px" alt="Sourcerer" /></a>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">11</th>
                                <th scope="col">Mail</th>
                                <th scope="col"><a href="mailto: jprakash150599@gmail.com" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={faEnvelope} />
                                </a></th>
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
