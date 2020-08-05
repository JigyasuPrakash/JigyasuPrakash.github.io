import React from 'react';
import Footer from './Footer';
import { FlexiImageGrid } from 'react-flexi-image-grid';

function Gallery() {

    const images = [
        {
            src: "./assets/files/Internship.jpg",
            alt: "Letter of Recommendation",
            className: "img1",
            id: "idImg1"
        }, {
            src: "./assets/files/JavaBusinessCertificate.jpg",
            alt: "Java Business Application Certificate",
            className: "img4",
            id: "idImg4"
        }, {
            src: "./assets/files/UdayFintech.jpg",
            alt: "Uday Fintech Certificate",
            className: "img9",
            id: "idImg9"
        }, {
            src: "./assets/files/SIH.jpg",
            alt: "Smart India Hackathon 2020",
            className: "img2",
            id: "idImg2"
        }, {
            src: "./assets/files/BlockChain.jpg",
            alt: "Blockchain Coursera Certificate",
            className: "img7",
            id: "idImg7"
        }, {
            src: "./assets/files/GitCertificate.jpg",
            alt: "Git Certificate",
            className: "img6",
            id: "idImg6"
        }, {
            src: "./assets/files/new_world_order.jpeg",
            alt: "New World Order SIH2020",
            className: "img3",
            id: "idImg3"
        }, {
            src: "./assets/files/ICPC2019.jpg",
            alt: "ICPC 2019 Certificate",
            className: "img8",
            id: "idImg8"
        }, {
            src: "./assets/files/PythonCertificate.jpg",
            alt: "Python Certificate",
            className: "img5",
            id: "idImg5"
        }
    ];

    const onClickHandler = (e) => {
        window.open(e.target.src, "_blank")
    }

    return (
        <div className="page">
            <section>
                <div className="section-title">
                    <h1><u>Gallery</u></h1>
                </div>
                <center>
                    <div className="row" style={{ justifyContent: "center", marginTop: "35px" }}>
                        <div className="col-11">
                            <FlexiImageGrid
                                images={images}
                                numberOfColumns={4}
                                onClick={onClickHandler}
                            />
                        </div>
                    </div>
                </center>
            </section>
            <Footer />
        </div>
    )
}

export default Gallery
