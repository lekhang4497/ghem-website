import React, {Component} from 'react';

class Banner extends Component {
    render() {
        return (
            <section className="banner-area relative" id="home" style={{backgroundPosition: "center"}}>
                <div className="container">
                    <div className="row fullscreen d-flex align-items-center justify-content-start">
                        <div className="banner-content col-lg-8 col-md-12">
                            <h4 className="text-white text-uppercase">Wide Options of Choice</h4>
                            <h1>
                                Delicious Receipes
                            </h1>
                            <p className="text-white">
                                We serve the best Vietnamese foods in the city.<br/>
                                Our food is diverse, healthy, and extremely delicious.
                            </p>
                            <a href="#" className="primary-btn header-btn text-uppercase">Check Our Menu</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
