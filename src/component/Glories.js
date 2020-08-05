import React from 'react';
import Footer from './Footer';

function Glories() {

    return (
        <div className="page">
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
                    <h1><u>Gallery</u></h1>
                </div>
                <center>
                    <div className="row" style={{ justifyContent: "center", margin: "35px" }}>
                        <div className="col-5">
                            <img
                                src="./assets/files/Internship.jpg"
                                alt="Letter of Recommendation Certificate"
                                width="100%" />
                        </div>
                    </div>
                    <div className="row" style={{ justifyContent: "center", margin: "35px" }}>
                        <div className="col-5">
                            <img
                                src="./assets/files/BlockChain.jpg"
                                alt="Blockchain Coursera Certificate"
                                width="100%" />
                        </div>
                        <div className="col-5">
                            <img
                                src="./assets/files/ICPC2019.jpg"
                                alt="ICPC 2019 Certificate"
                                width="100%" />
                        </div>
                    </div>
                    <div className="row" style={{ justifyContent: "center", margin: "35px" }}>
                        <div className="col-5">
                            <img
                                src="./assets/files/UdayFintech.jpg"
                                alt="Uday Fintech Certificate"
                                width="100%" />
                        </div>
                        <div className="col-5">
                            <img
                                src="./assets/files/JavaBusinessCertificate.jpg"
                                alt="JAVA Business Application Certificate"
                                width="100%" />
                        </div>
                    </div>
                    <div className="row" style={{ justifyContent: "center", margin: "35px" }}>
                        <div className="col-5">
                            <img
                                src="./assets/files/PythonCertificate.jpg"
                                alt="Python Certificate"
                                width="100%" />
                        </div>
                        <div className="col-5">
                            <img
                                src="./assets/files/GitCertificate.jpg"
                                alt="Git Certificate"
                                width="100%" />
                        </div>
                    </div>
                </center>
            </section>
            <Footer />
        </div>
    )
}

export default Glories
