import React from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import SkillTable from './SkillTable';

function Home() {
    return (
        <div className="page">
            <section className="home">
                <div>
                    <h1>Jigyasu Prakash</h1>
                    <h3>| Tech Enthu || Programmer || Full Stack Web Developer |</h3>
                </div>
            </section>
            <section>
                <div className="section-title">
                    <h2>About Me</h2>
                </div>
                <div className="section-info">
                    <p>Hi there, I am currently Final Year Engineering Student at <b>Shri Ramdeobaba College of
                        Engineering and Management, Nagpur</b>. I am a self-taught full stack web developer and
                        a Tech Video Creator with a little affection towards E-Sports. I love learning new stuff and
                        always keen to know the techie things.</p>
                    <p>When I am not Coding I use to create Tech Video content and do live streams on YouTube.
                    Creating videos makes me feel blessed and up to date as my content help other tech geeks
                         to learn and explore.</p>
                    <p>Want to know about me <NavLink to="/more" style={{ color: "#0275ff" }}>more</NavLink>!</p>
                </div>
            </section>
            <section style={{ margin: 0, padding: 0 }}>
                <div className="section-title">
                    <h1><u>Experiences</u></h1>
                </div>
                <div className="section-info">
                    <table className="table table-hover" style={{ color: "white", textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">Duration</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jan 2021 - Present</td>
                                <td>Solution Engineer @ <a href="https://deqode.com/" target="_black">Deqode Solutions</a></td>
                            </tr>
                            <tr>
                                <td>May 2020 - Jul 2020</td>
                                <td>Web Development Intern @ QuotesNStories, Hyderabad</td>
                            </tr>
                            <tr>
                                <td>Apr 2020 - May 2020</td>
                                <td>Full Stack FreeLancer @ TekSolutions, Mumbai</td>
                            </tr>
                            <tr>
                                <td>Jun 2019 - Aug 2019</td>
                                <td>Full Stack FreeLancer @ LITMUN19, Nagpur</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <div className="section-title">
                    <h1><u>Achievements/Awards</u></h1>
                </div>
                <div className="section-info">
                    <table className="table table-hover" style={{ color: "white", textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aug 2020</td>
                                <td>Winner of Smart India Hackathon 2020, Software Edition</td>
                            </tr>
                            <tr>
                                <td>Feb 2020</td>
                                <td>Invited as Speaker for Firebase CodeJam, GDG Nagpur</td>
                            </tr>
                            <tr>
                                <td>Oct 2019</td>
                                <td>Ranked 234th ICPC 2019, Kanpur Site</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <div className="section-title">
                    <h2>My Skills</h2>
                </div>
                <br />
                <SkillTable />
            </section>
            <Footer />
        </div>
    )
}

export default Home
