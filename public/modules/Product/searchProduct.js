import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import {
    Input,
    Icon
} from 'antd';

export default class SearchUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SearchDate:""
        }
    };
    emitEmpty() {
        this.SearchDateInput.focus();
        this.setState({ SearchDate: '' });
        this.props.getProduct()
    };
    onChangeSearchDate(e) {
        this.setState({ SearchDate: e.target.value })
        ajax({
			type:"get",
            url: "http://localhost:3000/product/searchProduct",
            data: {value:e.target.value},
            success: function (data) {
                data=JSON.parse(data)
                this.props.getSearchData(data)
			}.bind(this)
		});
    }
 
    render() {
        const { SearchDate } = this.state;
        const suffix = SearchDate ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this)} /> : null;
        return (
            <Input
                placeholder="请输入名字"
                prefix={<Icon type="user" />}
                suffix={suffix}
                value={SearchDate}
                onChange={this.onChangeSearchDate.bind(this)}
                ref={node => this.SearchDateInput = node}
            />
        );
    }
}