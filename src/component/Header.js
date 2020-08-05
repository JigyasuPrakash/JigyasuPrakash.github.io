import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header id="thisisnav" style={{ position: "fixed" }}>
            <ul style={{ padding: 0, margin: 0 }}>
                <NavLink to="/" className="w3-button">Home</NavLink>
                <NavLink to="/projects" className="w3-button">Projects</NavLink>
                <NavLink to="/gallery" className="w3-button">Gallery</NavLink>
                <NavLink to="/more" className="w3-button">More</NavLink>
            </ul>
        </header>
    )
}

export default Header
