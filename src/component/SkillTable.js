import React from 'react';

function SkillCard() {
    return (
        <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-sm-4">
                    <table className="table table-hover" style={{ color: "white", textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Language</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">JavaScript</th>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <th scope="col">Java</th>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <th scope="col">Python</th>
                            </tr>
                            <tr>
                                <th scope="col">4</th>
                                <th scope="col">R</th>
                            </tr>
                            <tr>
                                <th scope="col">5</th>
                                <th scope="col">HTML / CSS</th>
                            </tr>
                            <tr>
                                <th scope="col">6</th>
                                <th scope="col">C / C++</th>
                            </tr>
                            <tr>
                                <th scope="col">7</th>
                                <th scope="col">Go</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4">
                    <table className="table table-hover" style={{ color: "white", textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Frameworks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">Express JS</th>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <th scope="col">Node JS</th>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <th scope="col">React JS</th>
                            </tr>
                            <tr>
                                <th scope="col">4</th>
                                <th scope="col">p5 JS</th>
                            </tr>
                            <tr>
                                <th scope="col">5</th>
                                <th scope="col">jQuery</th>
                            </tr>
                            <tr>
                                <th scope="col">6</th>
                                <th scope="col">BootStrap</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4">
                    <table className="table table-hover" style={{ color: "white", textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">Bash/Shell</th>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <th scope="col">Git & GitHub</th>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <th scope="col">PyCharm</th>
                            </tr>
                            <tr>
                                <th scope="col">4</th>
                                <th scope="col">R-Studio</th>
                            </tr>
                            <tr>
                                <th scope="col">5</th>
                                <th scope="col">Android Studio</th>
                            </tr>
                            <tr>
                                <th scope="col">6</th>
                                <th scope="col">Travis CI</th>
                            </tr>
                            <tr>
                                <th scope="col">7</th>
                                <th scope="col">VS Code</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4">
                    <table className="table table-hover" style={{ color: "white", textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Database</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">MySQL</th>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <th scope="col">PostgreSQL</th>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <th scope="col">Firestore</th>
                            </tr>
                            <tr>
                                <th scope="col">4</th>
                                <th scope="col">MongoDB</th>
                            </tr>
                            <tr>
                                <th scope="col">5</th>
                                <th scope="col">Oracle 11g</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4">

                    <table className="table table-hover" style={{ color: "white", textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Cloud</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">Firebase</th>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <th scope="col">AWS</th>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <th scope="col">Heroku</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default SkillCard