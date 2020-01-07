import React, { Component } from 'react';
import BodyReportPage from './BodyReportPage';
import Upload from 'material-ui-upload/Upload';
//import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class ReportPageManager extends Component {
    
    constructor() {
        super();
        this.state = {
            reportName:"",
            reportDescription:"",
            imageSelectedUrl: '',
            images:[],
        }
    }

    addReport = (event) =>{
        console.log(this.state.reportName);
        console.log(this.state.reportDescription);
        console.log(this.state.images);
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
        const files = Array.from(event.target.files)
        this.setState({
            images: this.state.images.concat(files),
        });
    }

    removeImage = (pos) => {
        console.log(pos)
        this.state.images.splice(pos,1);
        this.setState({
            images: this.state.images,
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
                    images={this.state.images}
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