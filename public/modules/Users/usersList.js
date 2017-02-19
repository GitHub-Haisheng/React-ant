import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
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
                url: "http://localhost:3000/users/removeUesr",
                data: { id:id },
                success: function () {
                    this.props.getUsers()
            }.bind(this)
        })
     };

 
    render() {
         const columns = [
            { title: '姓名', dataIndex: 'name', key: 'name' },
            { title: '地区', dataIndex: 'location', key: 'location' },
            { title: '类型', dataIndex: 'type', key: 'type' },
            { title: '职位', dataIndex: 'jobs', key: 'jobs' },
            { title: '年限', dataIndex: 'experience', key: 'experience' },
            { title: '报价(元/天)', dataIndex: 'offer', key: 'offer' },
            { title: '成交量', dataIndex: 'volume', key: 'volume' },
            { title: '个人标签', dataIndex: 'self_title', key: 'self_title' },
            {
                title: '操作', dataIndex: '', key: 'x', render: (text, record) => {
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
                experience: data[i].experience,
                type: data[i].type,
                jobs: data[i].jobs,
                offer: data[i].offer,
                volume: data[i].volume,
                location: data[i].location,
                self_title: data[i].self_title,
                img: "http://localhost:3000/" + data[i].userPic,
                work:data[i].work,
                description:data[i].introduction
             })
         }
         const page = {
                    pageSize: 5,
                }
        return (
                <Table
                    columns={columns}
                    expandedRowRender={record => <p><img style={{ width: 50 }} src={record.img} /> {record.description} {record.work}</p>}
                    dataSource={dataList}
                    pagination={page}
                />
        )    
    }
}
export default UserList = createForm()(UserList);
