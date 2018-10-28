import React, {Component} from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import {Icon} from "antd";

class BackNav extends Component {
    render() {
        return (
            <header id="header" className="home">
                <div className="container">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo" style={{height: 30}}>
                            <Link to="/" className="lobster ghem-logo">Ghém</Link>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active"><a href="/"><Icon type="arrow-left" theme="outlined" /> Home page</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default BackNav;