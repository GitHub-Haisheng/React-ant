import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import UserList from "./productList"
import AddUser from "./addProduct"
import Update from "./upDate"
import SearchDate from "./searchProduct"
import {Card,Row,Col} from 'antd';

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            searchData: {},
            loading: false,
            updateVisible:false 
        }
    };
    componentWillMount() {
        this.getProduct()
    }
    // 显示全部
    getProduct() {
        ajax({
            type: "get",
            url: "http://localhost:3000/product/showProject",
            success: function (data) {
                var data = JSON.parse(data)
                this.setState({
                    data: data
                })
            }.bind(this)
        })
    };
    // 获取搜索数据
    getSearchData(data) {
      this.setState({data:data})  
    };
    // 打开修改模态框
    showUpdateModal(id) {
        ajax({
            type: "post",
            url: "http://localhost:3000/product/findById",
            data: { id: id },
            success: function (data) {
                var data = JSON.parse(data)
                this.setState({
                    searchData: data,
                    updateVisible: true,
                })
            }.bind(this)
        })
    };
    // 关闭修改模态框
    closeUpdateModal() {
         this.setState({
            loading:false,
            updateVisible: false,
        })
    }
    render() {
        return (<div >
            <Card title="项目管理" >  
                <Row >
                    <Col span="8">
                        <AddUser getProduct={this.getProduct.bind(this)} />  
                    </Col>
                    <Col span="8">
                    </Col>
                    <Col span="8">
                        <SearchDate  getSearchData={this.getSearchData.bind(this)} searchData={this.state.data} getProduct={this.getProduct.bind(this)}/>    
                    </Col>
                </Row>    
                <Update  loading={this.state.loading} searchData={this.state.searchData} updateVisible={this.state.updateVisible} getProduct={this.getProduct.bind(this)} closeModal={this.closeUpdateModal.bind(this)}/>
                <UserList showModal={this.showUpdateModal.bind(this)} UserList={this.state.data} getProduct={this.getProduct.bind(this)}/ >
            </Card>
        </div>
        )
    }
}