import React, {Component} from 'react';

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
                            <div className="item row align-items-center">
                                <div className="col-lg-6 rel-left">
                                    <h3>
                                        Fresh & Crispy All the time
                                    </h3>
                                    <p className="pt-30 pb-30">
                                        Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <a href="#" className="primary-btn header-btn text-uppercase">view full menu</a>
                                </div>
                                <div className="col-lg-6">
                                    <img className="img-fluid" src="img/food/1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="item row align-items-center">
                                <div className="col-lg-6 rel-left">
                                    <h3>
                                        Fresh & Crispy All the time
                                    </h3>
                                    <p className="pt-30 pb-30">
                                        Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <a href="#" className="primary-btn header-btn text-uppercase">view full menu</a>
                                </div>
                                <div className="col-lg-6">
                                    <img className="img-fluid" src="img/food/2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FoodSlider;
