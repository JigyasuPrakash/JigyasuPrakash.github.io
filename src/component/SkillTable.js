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
                                <td>1</td>
                                <td>TypeScript</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JavaScript</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Java</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Python</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>HTML / CSS</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>C / C++</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Go</td>
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
                                <td>1</td>
                                <td>Express JS</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Node JS</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>React JS</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>p5 JS</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>jQuery</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>BootStrap</td>
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
                                <td>1</td>
                                <td>Bash/Shell</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Git & GitHub</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>PyCharm</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>R-Studio</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Android Studio</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Travis CI</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>VS Code</td>
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
                                <td>1</td>
                                <td>MySQL</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>PostgreSQL</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Firestore</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>MongoDB</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Oracle 11g</td>
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
                                <td>1</td>
                                <td>Firebase</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>AWS</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Heroku</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default SkillCard