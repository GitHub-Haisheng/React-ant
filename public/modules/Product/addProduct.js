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

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

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
    componentWillMount(){
        this.getType()
        this.showOptionValue();
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
        // 获取与转化时间戳
        var timestamp = Date.parse(new Date());  
        timestamp = timestamp / 1000;  
        value.projectType=value.type+"/"+value.projectType
        value.time=timestamp
        
        if (value) {
            this.setState({ loading: true });
            ajax({
                type:"post",
                url: "http://localhost:3000/product/addProduct",
                data: value,
                success: function () {
                    this.resetForm()
                    this.props.getProduct()
                }.bind(this)
            });
        }
     };
   
    // 重置表单
     resetForm() {
        this.props.form.resetFields()
         this.setState({
            loading: false,
            visible: false,
        });
     };
    // 控制模态框关
    handleCancel() {
        this.setState({ visible: false });
        this.resetForm()
    };

    // 地区选项
    locationValue(value) {
		this.setState({
			userLocation:value
		});
    };
    // 类型选项
    typeValue(value) {
		this.setState({
			userType:value
		});
    };

    // 年限选项
     experienceValue(value) {
		this.setState({
			userExperience:value
		});
    };
    // 获取分类
    getType() {
       ajax({
            type: "get",
            url: "http://localhost:3000/product/type",
            success: function (data) {
                var data = JSON.parse(data)
                var typeOptionValue = data.map(function (value) {
					return <Option value={value._id} key={value.name}>{value.name}</Option>
				});
                this.setState({
                    typeOptionValue:typeOptionValue
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
             <Button type="primary" onClick={this.showModal.bind(this)}>
                    增加
                </Button>    
             <Modal
                    visible={this.state.visible}
                    title="增加客户"
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk.bind(this)}>
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
