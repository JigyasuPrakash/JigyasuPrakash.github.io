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
                        a Tech Video Creator with a little love towards E-Sports. I love learning new stuff and 
                        always keen to know the techie things.</p>
                    <p>When I am not Coding I use to create Tech Video content and do live streams on YouTube.
                    Creating videos makes me feel blessed and up to date as my content help other tech geeks
                         to learn and explore.</p>
                    <p>Want to know about me <NavLink to="/more" style={{ color: "#0275ff" }}>more</NavLink>!</p>
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
