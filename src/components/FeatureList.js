import React, {Component} from 'react';

class FeatureList extends Component {
    render() {
        return (
            <section className="features-area pt-100" id="feature">
                <div className="container">
                    <div className="feature-section">
                        <div className="row">
                            <div className="single-feature col-lg-3 col-md-6">
                                <img src="img/f1.png" alt=""/>
                                    <h4 className="pt-20 pb-20">Refreshing Breakfast</h4>
                                    <p>
                                        Lorem ipsum dolor sit ametcons ecteturadipis icing elit.
                                    </p>
                            </div>
                            <div className="single-feature col-lg-3 col-md-6">
                                <img src="img/f2.png" alt=""/>
                                    <h4 className="pt-20 pb-20">Awesome Lunch</h4>
                                    <p>
                                        Lorem ipsum dolor sit ametcons ecteturadipis icing elit.
                                    </p>
                            </div>
                            <div className="single-feature col-lg-3 col-md-6">
                                <img src="img/f3.png" alt=""/>
                                    <h4 className="pt-20 pb-20">Soothing Dinner</h4>
                                    <p>
                                        Lorem ipsum dolor sit ametcons ecteturadipis icing elit.
                                    </p>
                            </div>
                            <div className="single-feature col-lg-3 col-md-6">
                                <img src="img/f4.png" alt=""/>
                                    <h4 className="pt-20 pb-20">Rich Quality Buffet</h4>
                                    <p>
                                        Lorem ipsum dolor sit ametcons ecteturadipis icing elit.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureList;
