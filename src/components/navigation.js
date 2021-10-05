import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
    return(
        <div className="desktop-nav flex w-1/2 justify-between">
            <Link to="/menu">Menu</Link>
            <Link to="#story">Our Story</Link>
            <Link to="#team">Team</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Navigation;