import React, {Component} from 'react';
import Header from "./Header";
import Banner from "./Banner";
import TopRateList from "./TopRateList";
import VideoArea from "./VideoArea";
import FeatureList from "./FeatureList";
import FoodSlider from "./FoodSlider";
import Footer from "./Footer";

class Root extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <TopRateList/>
                <VideoArea/>
                <FeatureList/>
                <FoodSlider/>
                <Footer/>
            </div>
        );
    }
}

export default Root;
