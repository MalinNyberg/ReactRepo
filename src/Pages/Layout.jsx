import {Outlet, NavLink, Link} from "react-router-dom";
import { useState } from 'react';
import "./Layout.css";
import {HashLink} from "react-router-hash-link";

export const Layout = () => {
    const [menuActive, setMenuActive] = useState(false);

    function toggleMenu() {
       console.log("hello maddafakkas");
       setMenuActive(!menuActive);
    }

    return (
        <>
            <div className={`toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
            <div className={`sidebar ${menuActive ? 'active' : ''}`}>
                <ul className="menu">
                    <li>
                        <NavLink to="/" onClick={toggleMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <HashLink to="/#About" onClick={toggleMenu}>
                            About
                        </HashLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" onClick={toggleMenu}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" onClick={toggleMenu}>
                            Resumé
                        </NavLink>       
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
            <div className="copyright">
                <p>Copyright © 2024 Malin Nyberg. All Right Reserved.</p>
            </div>
        </>
    );
};