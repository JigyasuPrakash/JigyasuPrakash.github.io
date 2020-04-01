import React from 'react'
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="page">
            <section style={{ justifyContent: "center" }}>
                <div className="section-title">
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                    <br />
                    <br />
                    <NavLink to="/"><button className="btn-danger">Go Home</button></NavLink>
                </div>

            </section >
            <Footer />
        </div >
    )
}

export default NotFoundPage;