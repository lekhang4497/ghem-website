import React, {Component} from 'react';
import {Link} from "react-router-dom";

const FoodSliderItem = (props) => (
    <div className="item row align-items-center">
        <div className="col-lg-6 rel-left">
            <h3>
                {props.name}
            </h3>
            <p className="pt-30 pb-30">
                {props.description}
            </p>
            <Link to="/menu" className="primary-btn header-btn text-uppercase">view full menu</Link>
        </div>
        <div className="col-lg-6">
            <img className="img-fluid" src={"/img/food/" + props.img} alt=""/>
        </div>
    </div>
);

export default FoodSliderItem;
