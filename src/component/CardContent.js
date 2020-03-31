import React, { Component } from 'react'

export class SkillCard extends Component {
    render() {
        return (
            <div className="card border-danger mb-3" style={{ color: "white", backgroundColor: "darkslategray" }}>
                <div className="card-body">
                    <h5 className="card-header border-danger mb-3"></h5>
                    <h6 className="card-title"></h6>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                    voluptatum vel architecto accusantium nisi iure minus. Commodi enim ipsam unde ipsa fuga,
                    ratione ad blanditiis voluptatibus, doloremque aut quas. Cum.
                        </p>
                    <button className="btn"><a href="#"
                        className="btn card-link text-white bg-dark mb-3">GitHub</a></button>
                    <button className="btn" ><a href="#" className="btn card-link text-white bg-danger mb-3">Live
                            Demo</a></button>
                </div>
            </div>
        )
    }
}

export default SkillCard;