import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header id="header" className="home">
                <div className="container">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo" style={{height: 30}}>
                            <a href="index.html" className="lobster ghem-logo">Ghém</a>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active"><a href="#home">Home</a></li>
                                <li><a href="#dish">Dish</a></li>
                                <li><a href="#ghem-menu">Menu</a></li>
                                <li><a href="#ghem-contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;