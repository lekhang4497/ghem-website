import React, {Component} from 'react';

const FoodCard = (props) => (
    <div className="single-dish">
        <div className="thumb">
            <img className="img-fluid" src={"/img/food/" + props.img} alt=""/>
        </div>
        <h4 className="text-uppercase pt-20 pb-20">{props.name}</h4>
        <p>{props.description}</p>
    </div>
);

export default FoodCard;
