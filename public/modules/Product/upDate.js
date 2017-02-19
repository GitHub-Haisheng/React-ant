import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import {Form,Input,Button,Row,Col,Select, Upload, Icon, message,Modal } from "antd";

const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const formInputLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

class AddInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            trendOptionValue: ["没有倾向","全职", "兼职", "团队", "个人"],
            cycleOptionValue:["小于一周","一个月","三个月","六个月","六个月以上"],
            flagOptionValue:["已完成","未完成","招募中"],
            typeOptionValue: [] ,
            loading: false,
            visible: false,
        }
    };
    componentWillMount() {
        this.getType()
        this.showOptionValue();
    };
    shouldComponentUpdate(newProps, newState) {
        if (this.props.searchData != newProps.searchData) {
            // 设置表单
            if (newProps.searchData[0].type) {
               newProps.searchData[0].type= newProps.searchData[0].type._id
            }
            this.props.form.setFieldsValue(newProps.searchData[0])
        } 
        return true;
    };
    // 控制模态框开
    showModal() {
        this.setState({
            visible: true,
        });
    };
    // 模态框点击确定/提交数据
    handleOk() {
        const value = this.props.form.getFieldsValue();
        value.id = this.props.searchData[0]._id;
        this.setState({ loading: true });
        ajax({
			type:"get",
            url: "http://localhost:3000/product/update",
            data: value,
            success: function () {
                this.resetForm()
                this.props.getProduct()
			}.bind(this)
		});
     };
    // 重置表单
     resetForm() {
         this.props.form.resetFields()
        this.handleCancel() 
     };
    // 控制模态框关
     handleCancel() {
        this.props.closeModal()
    };

  // 获取分类
    getType() {
       ajax({
            type: "get",
            url: "http://localhost:3000/product/type",
            success: function (data) {
                var data = JSON.parse(data)
                this.setState({
                    typeOptionValue:data.map(function (value) {
                        return <Option value={value._id} key={value.name}>{value.name}</Option>
                    })
                })
            }.bind(this)
        })  
    };
    // 设置下拉框值
    showOptionValue() {
        this.setState({
            cycleOptionValue : this.state.cycleOptionValue.map(function (value) {
                return <Option key={value}>{value}</Option>
            }),
             trendOptionValue : this.state.trendOptionValue.map(function (value) {
                return <Option key={value}>{value}</Option>
            }),
              flagOptionValue : this.state.flagOptionValue.map(function (value) {
                return <Option key={value}>{value}</Option>
            }),   
        });
    }   

    render() {
        const form = this.props.form;
        const {getFieldDecorator} = this.props.form
        return (
            <div>
             <Modal
                    visible={this.props.updateVisible}
                    title="增加客户"
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.props.loading} onClick={this.handleOk.bind(this)}>
                        确定
                        </Button>,
                    ]}
                >    
                <Form horizontal >
                	<Row>
                        <Col span="8">
                            <FormItem label="名字" {...formItemLayout}>
                                 {getFieldDecorator('name', {})(
                                    <Input />
                                )}    
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="价格" {...formItemLayout}>
                                {getFieldDecorator('price', {})(
                                    <Input addonAfter="元"/>
                                )}  
                            </FormItem>	
                        </Col>
                        <Col span="8">
                            <FormItem label="公司" {...formItemLayout}>
                                {getFieldDecorator('company', {})(
                                    <Input />
                                )}          
                            </FormItem>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="类型" {...formItemLayout}>
                             {getFieldDecorator('type', {})(
                                <Select>
                                    {this.state.typeOptionValue}
                                </Select>
                            )}          
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="状态" {...formItemLayout}>
                            {getFieldDecorator('flag', {})(
                                <Select >
                                    {this.state.flagOptionValue}
                                </Select>
                            )}                 
                            </FormItem>	
                        </Col>
                        <Col span="8">
                        <FormItem label="倾向" {...formItemLayout}>
                            {getFieldDecorator('trend', {})(
                                <Select >
                                    {this.state.trendOptionValue}
                                </Select>
                            )}              
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="周期" {...formItemLayout}>   
                                {getFieldDecorator("cycle", {})(
                                   <Select >
                                    {this.state.cycleOptionValue}
                                </Select>
                                )}
                            </FormItem> 
                        </Col>    
                         <Col span="8">
                            <FormItem label="分类" {...formItemLayout}>   
                                 {getFieldDecorator('projectType', {})(
                                    <Input />
                                )}    
                            </FormItem> 
                        </Col>    
                         
                    </Row>        
                </Form>
                </Modal>
            </div>
        )
    }
}
 export default AddInfo = createForm()(AddInfo);
