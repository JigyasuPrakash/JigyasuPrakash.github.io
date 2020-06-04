import React from 'react'

function CardContent({ project }) {

    let githubButton = null;
    let liveButton = null;

    const cardTags = project.tags.map(tag => (
        <img key={tag} src={tag} alt="tags" style={{ margin: "2px" }} />
    ))

    if (project.github === "#") {
        githubButton = <button className="btn card-link text-white bg-dark mb-3" disabled>GitHub</button>
    } else {
        githubButton = <button className="btn"><a href={project.github} target="_blank" rel="noopener noreferrer" className="btn card-link text-white bg-dark mb-3">GitHub</a> </button>
    }
    if (project.live === "#") {
        liveButton = null;
    } else {
        liveButton = <button className="btn" ><a href={project.live} target="_blank" rel="noopener noreferrer" className="btn card-link text-white bg-primary mb-3">Live URL</a></button>
    }

    return (
        <div className="card border-primary mb-3" style={{ color: "white", backgroundColor: "darkslategray" }}>
            <div className="card-body">
                <h5 className="card-header border-danger mb-3"><b>{project.title}</b></h5>
                <h6 className="card-title">{cardTags}</h6>
                <p className="card-text">{project.summary}</p>
                {githubButton}
                {liveButton}
            </div>
        </div>
    )
}

export default CardContent;