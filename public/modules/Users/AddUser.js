import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import {Form,Input,Button,Row,Col,Select, Upload, Icon, message,Modal } from "antd";
import MyUpload from "./userUpload"

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
            locationOptionValue: ["北京", "上海","深圳","成都","武汉","长沙","杭州","国外","其他"],
            typeOptionValue: ["全职", "兼职", "团队", "自由职业"],
            experienceOptionValue:["1年","2年","3年","4年","5年","6年","7年","8年","9年","10年及以上"],
            // userLocation:"",
            // userType: "",
            // userExperience: "",
            loading: false,
            visible: false,
            homeImg: "",
            detailsImg: "",
            detailsImgUrl: "",
            homeImageUrl:""
        }
    };
    componentWillMount(){
		this.showOptionValue();
    };

    // 控制模态框开
    showModal() {
        this.setState({
            visible: true,
        });
    };
    // 获取首页图
    getHomeImg(info) {
        if (info.file.status === 'done') {
        // Get this url from response in real world.
        this.setState({ homeImg: info.file.response })
        getBase64(info.file.originFileObj, imageUrl => this.setState({ homeImageUrl:imageUrl }));
        }
    }
    // 获取介绍页图片
     getDetailsImg(info) {
        if (info.file.status === 'done') {
        // Get this url from response in real world.
        this.setState({ detailsImg: info.file.response })
        getBase64(info.file.originFileObj, imageUrl => this.setState({ detailsImgUrl:imageUrl }));
        }
    }
    // 模态框点击确定/提交数据
    handleOk() {
        const value = this.props.form.getFieldsValue();
        value.userPic = this.state.homeImg;
        value.indexPic = this.state.detailsImg;
        value.volume = 0+"单";
        if (value) {
            this.setState({ loading: true });
            ajax({
                type:"post",
                url: "http://localhost:3000/users/addUesr",
                data: value,
                success: function () {
                    this.resetForm()
                    this.props.getUsers()
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
            homeImg:"",
            detailsImg: "",
            detailsImgUrl: "",
            homeImageUrl:""
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

    // 设置下拉框值
    showOptionValue() {
        this.setState({
            locationOptionValue : this.state.locationOptionValue.map(function (value) {
                return <Option key={value}>{value}</Option>
            }),
            typeOptionValue : this.state.typeOptionValue.map(function (value) {
                return <Option key={value}>{value}</Option>
            }),
             experienceOptionValue : this.state.experienceOptionValue.map(function (value) {
                return <Option key={value}>{value}</Option>
            })
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
                            <FormItem label="姓名" {...formItemLayout}>
                                 {getFieldDecorator('name', {})(
                                    <Input />
                                )}    
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="报价" {...formItemLayout}>
                                {getFieldDecorator('offer', {})(
                                    <Input addonAfter="元/天"/>
                                )}  
                            </FormItem>	
                        </Col>
                        <Col span="8">
                            <FormItem label="标签" {...formItemLayout}>
                                {getFieldDecorator('self_title', {})(
                                    <Input />
                                )}          
                            </FormItem>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="年限" {...formItemLayout}>
                             {getFieldDecorator('experience', {})(
                                    <Select>
                                    {this.state.experienceOptionValue}
                                    </Select>
                            )}          
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="地区" {...formItemLayout}>
                            {getFieldDecorator('location', {})(
                                    <Select >
                                        {this.state.locationOptionValue}
                                    </Select>
                            )}                 
                            </FormItem>	
                        </Col>
                        <Col span="8">
                        <FormItem label="类型" {...formItemLayout}>
                            {getFieldDecorator('type', {})(
                                <Select >
                                    {this.state.typeOptionValue}
                                </Select>
                            )}              
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="职位" {...formItemLayout}>   
                                {getFieldDecorator("jobs", {})(
                                    <Input />
                                )}
                            </FormItem> 
                        </Col>    
                        <Col span="8">
                             <FormItem label="描述" {...formItemLayout}>   
                                {getFieldDecorator("introduction", {})(
                                    <Input />
                                )}
                             </FormItem>   
                        </Col>    
                    </Row>        
                     <Row>
                        <Col span="24">
                            <FormItem label="简介" {...formInputLayout}>
                                {getFieldDecorator("work",{})(
                                    <Input />
                            )}        
                            </FormItem>
                        </Col>
                    </Row>   
                    <Row>
                        <Col span="12">
                                上传首页图片:<MyUpload action="http://localhost:3000/users/homeImg" homeImageUrl={this.state.homeImageUrl} handleChange={this.getHomeImg.bind(this)}/>
                        </Col>
                          <Col span="12">
                                上传介绍图片:<MyUpload action="http://localhost:3000/users/detailsImg" detailsImgUrl={this.state.detailsImgUrl} handleChange={this.getDetailsImg.bind(this)}/>
                        </Col>
                    </Row>    
                </Form>
                </Modal>
            </div>
        )
    }
}
 export default AddInfo = createForm()(AddInfo);
