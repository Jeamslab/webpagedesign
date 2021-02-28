import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import "./Navbar.css";
import { Button3 } from "./Button"

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const Clickview = () => setClick(!click);
    const closeMenuMbl = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener("resize", showButton);
 

    return (
        <>

            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick=
                    {closeMenuMbl}>
                        Memento
                        <i className="fas fa-chess"/>
                    </Link>
                    <div className="menu-icon"
                        onClick={Clickview}>
                        <i className={
                            click ? "fas fa-times" : "fas fa-bars"
                        }/>
                    </div>
                    <ul className={
                        click ? "nav-menu active" : "nav-menu"
                    }>
                        <li className="nav-item">
                            <Link to="/" className="nav-links"
                                onClick={closeMenuMbl}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links"
                                onClick={closeMenuMbl}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links"
                                onClick={closeMenuMbl}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/forum" className="nav-links"
                                onClick={closeMenuMbl}>
                                Forum
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-in" className="nav-links-mobile"
                                onClick={closeMenuMbl}>
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile"
                                onClick={closeMenuMbl}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button3 buttonStyle="btn--outline">Sign In</Button3>}
                    {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
                </div>
            </nav>

        </>
    );
}

export default Navbar
