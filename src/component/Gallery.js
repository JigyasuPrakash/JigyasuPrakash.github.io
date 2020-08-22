import React from 'react';
import MyGallery from 'react-grid-gallery';

function Gallery() {

    const images1 = [{
        src: "./assets/files/Internship.jpg",
        thumbnail: "./assets/files/Internship.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "QuotesNStories Recommendation Letter"
    }, {
        src: "./assets/files/LokmatEng.jpg",
        thumbnail: "./assets/files/LokmatEng.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "Lokmat Times English NewsPaper Article",
    }, {
        src: "./assets/files/LokmatHindi.jpg",
        thumbnail: "./assets/files/lokmathindi.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "Lokmat Samachar Hindi NewsPaper Article",
    }, {
        src: "./assets/files/SIH.jpg",
        thumbnail: "./assets/files/SIH.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "SIH 2020 Valedictory Function",
    }, {
        src: "./assets/files/new_world_order.jpeg",
        thumbnail: "./assets/files/new_world_order.jpeg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "Team: NEW_WORLD_ORDER",
    }, {
        src: "./assets/files/firebasecodejam.jpg",
        thumbnail: "./assets/files/firebasecodejam.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "Firebase CodeJam by GDG Nagpur",
    },
    {
        src: "./assets/files/litmun.jpg",
        thumbnail: "./assets/files/litmun.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "LITMUN 2020 Letter of Appreciation"
    }, {
        src: "./assets/files/BlockChain.jpg",
        thumbnail: "./assets/files/BlockChain.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "Coursera Blockchain Certificate",
    }, {
        src: "./assets/files/ICPC2019.jpg",
        thumbnail: "./assets/files/ICPC2019.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "ICPC Honerable Mention",
    }, {
        src: "./assets/files/UdayFintech.jpg",
        thumbnail: "./assets/files/UdayFintech.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "Uday Fintech Certification",
    }, {
        src: "./assets/files/JavaBusinessCertificate.jpg",
        thumbnail: "./assets/files/JavaBusinessCertificate.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "Java Business Application Training Certificate",
    }, {
        src: "./assets/files/PythonCertificate.jpg",
        thumbnail: "./assets/files/PythonCertificate.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "Python Training Certificate",
    }, {
        src: "./assets/files/GitCertificate.jpg",
        thumbnail: "./assets/files/GitCertificate.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200,
        caption: "Git Training Certificate",
    }
    ];

    return (
        <div className="page">
            <section>
                <div className="section-title">
                    <h1><u>Gallery</u></h1>
                </div>
                <div style={{ justifyContent: "center", margin: "35px" }}>
                    <MyGallery
                        images={images1}
                        enableImageSelection={false}
                        rowHeight={280}
                    />
                </div>
            </section>
        </div>
    )
}

export default Gallery
