import React, {Component} from 'react';
import Footer from "./Footer";
import BackNav from "./BackNav";
import MenuList from "./MenuList";
import axios from "axios"
import {Avatar, Card, Col, Icon, Menu} from "antd";
import Row from "antd/es/grid/row";
import "./MenuPage.scss"
import Helper from "../service/Helper";

class MenuPage extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    constructor() {
        super();
        this.state = {
            menu: [],
            types: []
        };
        this.fullMenu = [];
        localStorage.setItem("refresh", "1");
    }

    getMenu() {
        axios.get("/dishes.json").then(response => {
            console.log(response);
            this.fullMenu = response.data;
            this.fullMenu.sort((a, b) => a.type.localeCompare(b.type));
            // this.fullMenu = this.fullMenu.map(item => {
            //     return {...item, type: this.normalize(item.type)}
            // });
            let typeList = Array.from(new Set(this.fullMenu.map(item => item.type)));
            this.setState({
                menu: [...this.fullMenu],
                types: typeList
            });
        }).catch(error => {
            console.log(error);
        })
    };

    componentDidMount() {
        this.getMenu();
    }

    getMenuForType(type) {
        if (type === "all") {
            this.setState({menu: [...this.fullMenu]});
            return;
        }
        this.setState({
            menu: this.fullMenu.filter(item => item.type === type)
        });
    }

    render() {
        return (
            <div>
                <BackNav/>
                <section className="section-gap">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-60 col-lg-8">
                                <div className="title text-center">
                                    <h1 className="mb-10">Our Delicious Menu</h1>
                                    <p>Which is absolutely healthy.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 58}}>
                            <Row gutter={32} type="flex" justify="start">
                                {this.state.types.map(item =>
                                    <Col lg={6} md={8} sm={12} xs={12}>
                                        <Card onClick={() => this.getMenuForType(item)}
                                              className="card-type"
                                              hoverable>
                                            <div className="text-center text-md-left">
                                                <Avatar src={"/img/icon/" + item + ".png"} className="m-0 mr-md-3"/>
                                                <div className="d-md-inline mt-2 m-md-0">{Helper.normalize(item)}</div>
                                            </div>
                                        </Card>
                                    </Col>
                                )}
                            </Row>
                        </div>
                        <MenuList data={this.state.menu}/>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default MenuPage;
