import React, {Component} from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import {Icon} from "antd";

class BackNav extends Component {

    componentDidMount() {
        let navToggle = document.getElementById("mobile-nav-toggle");
        let mobileNav = document.getElementById("mobile-nav");
        let mobileOverlay = document.getElementById("mobile-body-overly");
        if (navToggle)
            navToggle.parentNode.removeChild(navToggle);
        if (mobileNav)
            mobileNav.parentNode.removeChild(mobileNav);
        if (mobileOverlay) {
            this.eventFire(mobileOverlay, 'click')
            mobileOverlay.parentNode.removeChild(mobileOverlay);
        }
    }

    eventFire(el, etype) {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }

    render() {
        return (
            <header id="header" className="home">
                <div className="container">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo" style={{height: 30}}>
                            <Link to="/" className="special-font ghem-logo animated infinite swing">Ghém</Link>
                        </div>
                        <nav>
                            <ul className="nav-menu">
                                <li className="menu-active"><Link to="/">
                                    <Icon type="arrow-left" theme="outlined"/>
                                    Home page
                                </Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default BackNav;
