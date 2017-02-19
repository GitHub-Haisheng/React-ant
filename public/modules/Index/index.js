import React from "react";
import ReactDOM from "react-dom";
import {Link,hashHistory} from "react-router";
import {Row, Col, Form, Input, Table, Button, Card, Menu,Icon} from "antd";
const SubMenu = Menu.SubMenu;

export default class Index extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		return <div>
			<Row style={{ height: 60, background: "#3dca99", color: "#f8f9fb" , fontWeight:"700",lineHeight: "60px" ,fontSize:"18px"}}>
				<Col>
					<Header/>
				</Col>
			</Row>
			<Row style={{overflow:"hidden"}}>
				<Col span="6" style={{float:"left"}}>
					<Menus/>
				</Col>
				<Col span="18" style={{ float: "right" }}>
					{this.props.children}
				</Col>
			</Row>
		</div>
	}
}

class Menus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: 'dark',
			current: "1"
		}
	};
	handleClick(e) {
		this.setState({
			current: e.key
		})
	}
	render() {
		return (<div>
			<Menu className="menu"  onClick={this.handleClick.bind(this) } selectedKeys={[this.state.current]}    defaultOpenKeys={['sub1']} theme={this.state.theme} style={{ height: 612,paddingTop:20,fontSize:"12px"}} mode="inline" >
				<SubMenu key="sub1" title={<span><Icon type="mail" /><span style={{fontSize:"16px"}} >系统管理</span></span>}>
					<Menu.Item key="1" style={{fontSize:"16px"}}>用户管理<Link to="/users"/></Menu.Item>
					<Menu.Item key="2" style={{fontSize:"16px"}}>项目管理<Link to="/Product"/></Menu.Item>
				</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="appstore" /><span style={{fontSize:"16px"}} >系统设置</span></span>}>
					<Menu.Item key="1" style={{fontSize:"16px"}} disabled>管理一</Menu.Item>
					<Menu.Item key="2" style={{fontSize:"16px"}} disabled>管理二</Menu.Item>
				</SubMenu>
					<Menu.Item key="3" style={{fontSize:"16px"}}><Icon type="meh" />退出</Menu.Item>
			</Menu>
		</div>
		)
	}
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
//获取用户对象
	render() {
		return <div>
			<Row>
				<Col span="4" push="1">
					
					<div className="logo">后台管理</div>
				</Col>
				<Col span="4" style={{ float: "right" }}>
					
				</Col>
			</Row>
		</div>
	}
}
