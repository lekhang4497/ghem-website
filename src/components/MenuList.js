import React, {Component} from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import {Avatar, Icon, List} from "antd";

const MenuList = (props) =>
    <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={"/img/icon/" + item.type + ".png"}/>}
                    title={item.name}
                    description={item.type}
                />
                <b>{item.price + " VND"}</b>
            </List.Item>
        )}
    />;

export default MenuList;
