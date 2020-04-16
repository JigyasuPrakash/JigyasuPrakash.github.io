import React from 'react'
import Footer from './Footer';
import CardContent from './CardContent';

function Home() {

    const projects = [
        {
            title: "HasteUp",
            tags: [
                "https://img.shields.io/badge/-JavaScript-brightgreen",
                "https://img.shields.io/badge/-Express%20JS-brightgreen",
                "https://img.shields.io/badge/-Passport%20JS-brightgreen",
                "https://img.shields.io/badge/-MongoDB-brightgreen"
            ],
            summary: "To collect various data from various public APIs and use data visualization to create meaningfull results.Currently this project is uder development.",
            github: "#",
            live: "#"
        },
        {
            title: "On Looker",
            tags: [
                "https://img.shields.io/badge/-JavaScript-brightgreen",
                "https://img.shields.io/badge/-Express%20JS-brightgreen",
                "https://img.shields.io/badge/-Tesseract%20JS-brightgreen",
                "https://img.shields.io/badge/-MongoDB-brightgreen"
            ],
            summary: "Image search engine using text as imput to find relevent images. Built using express server and Tesseract JS. Searching the keyword uses regex for better output",
            github: "https://github.com/JigyasuPrakash/on-looker",
            live: "https://on-looker.herokuapp.com/"
        },
        {
            title: "Coronavirus Live Tracker",
            tags: [
                "https://img.shields.io/badge/-JavaScript-brightgreen",
                "https://img.shields.io/badge/-ARCGIS%20API-brightgreen",
                "https://img.shields.io/badge/-Chart%20JS-brightgreen"
            ],
            summary: "To visualise the live spread of COVID-19 virus aka Nobel Corona Virus. This projects helps in better visualisation of the spread of the virus as in Real Time.",
            github: "https://github.com/JigyasuPrakash/coronavirus-tracker",
            live: "https://projects.itsjigyasu.me/coronavirus-tracker"
        },
        {
            title: "Verve",
            tags: [
                "https://img.shields.io/badge/-JavaScript-brightgreen",
                "https://img.shields.io/badge/-p5%20JS-brightgreen",
                "https://img.shields.io/badge/-HTML%20Canvas-brightgreen"
            ],
            summary: "To visualise various Line Clipping Algorithms such as Mid-Point, Cohen Sutherland & Cyrus Beck. Implemnted using p5 JS library and HTML Canvas.",
            github: "https://github.com/JigyasuPrakash/verve",
            live: "https://projects.itsjigyasu.me/verve/"
        },
        {
            title: "Graph Search GUI",
            tags: [
                "https://img.shields.io/badge/-JavaScript-brightgreen",
                "https://img.shields.io/badge/-p5%20JS-brightgreen",
                "https://img.shields.io/badge/-HTML%20Canvas-brightgreen"
            ],
            summary: "To visualise Breadth First Search Algorithm (BFS) over Romania Map and it is made such a way that this can be expanded for any other set of input.",
            github: "https://github.com/JigyasuPrakash/graph-search-gui",
            live: "https://projects.itsjigyasu.me/graph-search-gui/"
        },
        {
            title: "Algo Analyst",
            tags: [
                "https://img.shields.io/badge/-PHP-brightgreen",
                "https://img.shields.io/badge/-JavaScript-brightgreen",
                "https://img.shields.io/badge/-Chart%20JS-brightgreen",
                "https://img.shields.io/badge/-HTML-brightgreen",
            ],
            summary: "To provide a platform to write effecient sorting algorithms. But analysing the execution time utilised by the algorithm for various set of input.",
            github: "https://github.com/JigyasuPrakash/algo-analyst",
            live: "http://algo-analyst-algoanalyst.apps.ca-central-1.starter.openshift-online.com/"
        },
        {
            title: "FaceSpace",
            tags: [
                "https://img.shields.io/badge/-Java-brightgreen",
                "https://img.shields.io/badge/-Android-brightgreen",
                "https://img.shields.io/badge/-TensorFlow-brightgreen",
                "https://img.shields.io/badge/-AI-brightgreen"
            ],
            summary: "To provide security to smart phones by constantly monitoring whose in front of device and if a non recognised person is present then it shuts the screen off.",
            github: "https://projects.github.com/JigyasuPrakash/Beta-FaceSpace",
            live: "#"
        },
    ]

    // const preview = [
    //     {
    //         title: "HasteUp",
    //         media: ""
    //     },
    //     {
    //         title: "Coronavirus Live Tracker",
    //         media: ""
    //     },
    //     {
    //         title: "Verve",
    //         media: ""
    //     },
    //     {
    //         title: "Graph Search GUI",
    //         media: ""
    //     },
    //     {
    //         title: "FaceSpace",
    //         media: ""
    //     },
    // ]
    const cardCreated = projects.map(project => (
        <div key={project.title} className="col-sm-4">
            <CardContent project={project} />
        </div>
    ))

    return (
        <div className="page">
            <section>
                <div className="section-title">
                    <h1><u>Projects</u></h1>
                </div>
            </section>
            <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                    {cardCreated}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
