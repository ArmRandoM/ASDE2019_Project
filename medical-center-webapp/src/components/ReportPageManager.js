import React, { Component } from 'react';
import BodyReportPage from './BodyReportPage';
import Upload from 'material-ui-upload/Upload';
//import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js';

export default class ReportPageManager extends Component {
    
    constructor() {
        super();
        this.state = {
            reportName:"",
            reportDescription:"",
            imagePreviewUrl:'',
            image:'',
        }
    }

    addReport = (event) =>{
        console.log(this.state.reportName);
        console.log(this.state.reportDescription);
        console.log(this.state.image);
    }


    onChangeName = (event) => {
        this.setState({
            reportName: event.target.value,
        });
    }
    
    onChangeDescription = (event) => {
        this.setState({
            reportDescription: event.target.value,
        });
    }

    uploadImage = (event) => {
        let reader = new FileReader();
        let file = event.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            image: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
    }

    removeImage = () => {
        this.setState({
            image: '',
        });
    }

    halfOpacity = (event) => {
        event.target.style.opacity = '0.5';
    }

    normalOpacity = (event) => {
        event.target.style.opacity = '1';
    }

    render() {
        return (
            <div>
                <BodyReportPage
                    addReport={this.addReport}
                    reportName={this.state.reportName}
                    reportDescription={this.state.reportDescription}
                    image={this.state.image}
                    imagePreviewUrl={this.state.imagePreviewUrl}
                    pictures={this.state.pictures}
                    uploadImage={this.uploadImage}
                    onChangeName={this.onChangeName}
                    removeImage={this.removeImage}
                    normalOpacity={this.normalOpacity}
                    halfOpacity={this.halfOpacity}
                    onChangeDescription={this.onChangeDescription}/>
            </div>
        );
    }

}