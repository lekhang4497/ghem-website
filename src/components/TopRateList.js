import React, {Component} from 'react';
import {Col, Row} from "antd";
import FoodCard from "./FoodCard";

class TopRateList extends Component {
    render() {
        return (
            <section className="top-dish-area section-gap" id="dish">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">Our Top Rated Dishes</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <Row type="flex" justify="center" gutter={32}>
                        <Col xs={24} sm={12} md={8} lg={8}><FoodCard name="Demo food" description="Demo description" img="1.jpg"/></Col>
                        <Col xs={24} sm={12} md={8} lg={8}><FoodCard name="Demo food" description="Demo description" img="2.jpg"/></Col>
                        <Col xs={24} sm={12} md={8} lg={8}><FoodCard name="Demo food" description="Demo description" img="3.jpg"/></Col>
                        <Col xs={24} sm={12} md={8} lg={8}><FoodCard name="Demo food" description="Demo description" img="4.jpg"/></Col>
                        <Col xs={24} sm={12} md={8} lg={8}><FoodCard name="Demo food" description="Demo description" img="5.jpg"/></Col>
                        <Col xs={24} sm={12} md={8} lg={8}><FoodCard name="Demo food" description="Demo description" img="6.jpg"/></Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default TopRateList;
