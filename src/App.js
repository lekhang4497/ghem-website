import React, {Component} from 'react';
import Root from "./components/Root";
import 'antd/dist/antd.css';
import "./App.css"
import {BrowserRouter, Route} from "react-router-dom";
import MenuPage from "./components/MenuPage";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Route exact path="/" component={Root}/>
                    <Route path="/menu" component={MenuPage}/>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default App;
