import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import setTime from "setTime";
import {Table,Card,Form,Popover,Button,pagination} from 'antd';
const createForm = Form.create;

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };
     // 删除订单
    Del(id) {
        ajax({
                type: "get",
                url: "http://localhost:3000/product/removeProduct",
                data: { id:id },
                success: function () {
                    this.props.getProduct()
            }.bind(this)
        })
     };

 
     render() {
         const columns = [
            { title: '姓名', dataIndex: 'name', key: 'name' , width: 150,fixed: 'left'},
            { title: '价格', dataIndex: 'price', key: 'price' },
            { title: '公司', dataIndex: 'company', key: 'company' },
            { title: '类型', dataIndex: 'type', key: 'type' },
            { title: '状态', dataIndex: 'flag', key: 'flag' },
            { title: '分类', dataIndex: 'projectType', key: 'projectType' },
            { title: '倾向', dataIndex: 'trend', key: 'trend' },
            { title: '周期', dataIndex: 'cycle', key: 'cycle' },
            { title: '发布时间', dataIndex: 'time', key: 'time' },
            {
                title: '操作', dataIndex: '', key: 'x', fixed: 'right',width: 100, render: (text, record) => {
                const content = (
                    <div>
                        <a  onClick={() => {this.Del(text.key) } } >确认 删除</a >
                    </div>
                    );
                return <div><Button type= "primary" onClick={() => (this.props.showModal(text.key)) } > 修改</Button >
                 <Popover content={content} title="确定删除？" trigger="click">
                        <a > 删除</a >
                </Popover>  </div>
            } },
        ];
         const data = this.props.UserList;
         var dataList=[]
         var len = data.length, i;
         for (i = 0; i < len; i++){
             dataList.push({
                key: data[i]._id,
                name: data[i].name,
                price: data[i].price,
                type:data[i].type?data[i].type.name:"",
                company: data[i].company,
                flag: data[i].flag,
                projectType: data[i].projectType,
                trend: data[i].trend,
                cycle: data[i].cycle,
                time: setTime(data[i].time,1),
             })
         }
         const page = {
                    pageSize: 5,
                }
        return (
                <Table
                    columns={columns}
                    dataSource={dataList}
                    pagination={page}
                    scroll={{ x: 1300 }}
                />
        )    
    }
}
export default UserList = createForm()(UserList);
