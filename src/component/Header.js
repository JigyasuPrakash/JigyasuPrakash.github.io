import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Header() {
    return (
        <header id="thisisnav" style={{position: "sticky"}}>
            <ul style={{padding:0, margin:0}}> 
                <Link to="/" className="w3-button">Home</Link>
                <Link to="/about" className="w3-button">About</Link>
                <Link to="/projects" className="w3-button">Projects</Link>
            </ul>
        </header>
    )
}

export default Header
