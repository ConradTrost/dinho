import React, { useState, useEffect } from 'react';

import MobileNavigation from './mobileNavigation';
import Navigation from './navigation';

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    const handleResize = () => {
        if (window.screen.width < 768) {
            setMenuToggle(false);
        } else {
            setMenuToggle(true);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, [])

    return(
        <header className=" w-full absolute top-0 left-0 z-50">
            <div className="header-wrap flex justify-between items-center items-center">
                <h2>DINHO</h2>
                {menuToggle ? <Navigation /> : <MobileNavigation /> }
            </div>
        </header>
    )
}

export default Header;