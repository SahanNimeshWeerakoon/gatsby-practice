import { Link } from 'gatsby';
import React from 'react'

const Menu = () => {
    return (
        <div style={{background: '#F4F4F4', paddingTop: '10px'}}>
            <ul style={{ listSyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    );
}

export default Menu