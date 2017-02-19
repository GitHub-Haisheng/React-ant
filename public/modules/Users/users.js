import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import UserList from "./usersList"
import AddUser from "./AddUser"
import Update from "./upDate"
import SearchDate from "./searchUser"
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
        this.getUsers()
    }
    // 显示全部
    getUsers() {
        ajax({
            type: "get",
            url: "http://localhost:3000/users/showUser",
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
            url: "http://localhost:3000/users/findById",
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
            <Card title="客户管理" >  
                <Row >
                    <Col span="8">
                        <AddUser getUsers={this.getUsers.bind(this)} />  
                    </Col>
                    <Col span="8">
                    </Col>
                    <Col span="8">
                        <SearchDate  getSearchData={this.getSearchData.bind(this)} searchData={this.state.data} getUsers={this.getUsers.bind(this)}/>    
                    </Col>
                </Row>    
                <Update  loading={this.state.loading} searchData={this.state.searchData} updateVisible={this.state.updateVisible} getUsers={this.getUsers.bind(this)} closeModal={this.closeUpdateModal.bind(this)}/>
                <UserList showModal={this.showUpdateModal.bind(this)} UserList={this.state.data} getUsers={this.getUsers.bind(this)}/ >
            </Card>
        </div>
        )
    }
}