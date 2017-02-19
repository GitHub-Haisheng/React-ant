import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import { Upload, Icon, message } from 'antd';



function beforeUpload(file) {
    const isJPG = file.type === 'image/jpg' ||'image/png';
  
  if (!isJPG) {
    message.error('只可以上传png或者jpg格式的图片!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('请上传2MB以内的图片!');
  }
  return isJPG && isLt2M;
}

export default class MyUpdateUpload extends React.Component{
    constructor(props){
		super(props);
        this.state = {
		}
	};

  render() {
    const imageUrl =this.props.homeImageUrl ? "http://localhost:3000/"+this.props.homeImageUrl :  "http://localhost:3000/"+this.props.detailsImgUrl ;
    return (
      <Upload
        className="avatar-uploader"
        showUploadList={false}
        action={this.props.action}    
        beforeUpload={beforeUpload}
        onChange={this.props.handleChange}
      >
        {
          imageUrl ?    
            <img src={imageUrl} alt="" className="avatar" /> :
            <Icon type="plus" className="avatar-uploader-trigger" />
        }
      </Upload>
    );
  }
}