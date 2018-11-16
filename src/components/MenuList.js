import React from 'react';
import './Header.scss'
import {Avatar, List} from "antd";
import Helper from "../service/Helper";

const MenuList = (props) =>
    <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={"/img/icon/" + item.type + ".png"}/>}
                    title={item.name}
                    description={Helper.normalize(item.type)}
                />
                <b>{item.price + " VND"}</b>
            </List.Item>
        )}
    />;

export default MenuList;
