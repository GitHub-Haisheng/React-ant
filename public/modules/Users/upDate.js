import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import {Form,Input,Button,Row,Col,Select, Upload, Icon, message,Modal } from "antd";
import MyUpdateUpload from "./userUpdateUpload"

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
    shouldComponentUpdate(newProps, newState) {
        if (this.props.searchData != newProps.searchData) {
            // 设置表单
            this.props.form.setFieldsValue(newProps.searchData[0])
            // 设置图片
            this.setState({
                homeImg: newProps.searchData[0].userPic,
                detailsImg: newProps.searchData[0].indexPic
            })
        } 
        return true;
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
        this.setState({ homeImg:info.file.response  });
        }
    }
    // 获取介绍页图片
     getDetailsImg(info) {
         if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.setState({ detailsImg: info.file.response });
        }
    }
    // 模态框点击确定/提交数据
    handleOk() {
        const value = this.props.form.getFieldsValue();
        value.userPic = this.state.homeImg;
        value.indexPic = this.state.detailsImg;
        value.volume = this.props.searchData[0].volume||0;
        value.id = this.props.searchData[0]._id;
        this.setState({ loading: true });
        ajax({
			type:"get",
            url: "http://localhost:3000/users/update",
            data: value,
            success: function () {
                this.resetForm()
                this.props.getUsers()
			}.bind(this)
		});
     };
    // 重置表单
     resetForm() {
         this.props.form.resetFields()
         this.setState({
            homeImg: "",
            detailsImg: "",
            detailsImgUrl: "",
            homeImageUrl:""
        }) 
        this.handleCancel() 
     };
    // 控制模态框关
     handleCancel() {
        this.props.closeModal()
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
                                    <Select >
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
                                <Select>
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
                                上传首页图片:<MyUpdateUpload action="http://localhost:3000/users/homeImg" homeImageUrl={this.state.homeImg} handleChange={this.getHomeImg.bind(this)}/>
                        </Col>
                          <Col span="12">
                                上传介绍图片:<MyUpdateUpload action="http://localhost:3000/users/detailsImg" detailsImgUrl={this.state.detailsImg} handleChange={this.getDetailsImg.bind(this)}/>
                        </Col>
                    </Row>    
                </Form>
                </Modal>
            </div>
        )
    }
}
 export default AddInfo = createForm()(AddInfo);
