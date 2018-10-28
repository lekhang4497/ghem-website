import React, {Component} from 'react';
import FoodSliderItem from "./FoodSliderItem";

class FoodSlider extends Component {
    render() {
        return (
            <section className="related-area section-gap" id="ghem-menu">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">Our Featured Food Menus</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="active-realated-carusel">
                            <FoodSliderItem name="Fresh & Crispy All the time" description=" Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat." img="1.jpg"/>
                            <FoodSliderItem name="Fresh & Crispy All the time" description=" Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat." img="2.jpg"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FoodSlider;
