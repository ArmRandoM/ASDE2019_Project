import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodyReportPage from './BodyReportPage';

export default class ReportPageManager extends Component {
    
    constructor() {
        super();
        this.state = {
            reportName:"",
            reportDescription:"",
            images:[],
        }
        this.onDrop = this.onDrop.bind(this);
    }

    logOut = (event) =>{
        
    }

    addReport = (event) =>{
        console.log(this.state.reportName);
        console.log(this.state.reportDescription);
        console.log(this.state.images);
    }

    onDrop(picture) {
        this.setState({
            images: this.state.images.concat(picture),
        });
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


    render() {
        return (
            <div>
                <MenuBar
                    logOut={this.logOut}/>
                <BodyReportPage
                    addReport={this.addReport}
                    reportName={this.state.reportName}
                    reportDescription={this.state.reportDescription}
                    images={this.state.images}
                    onDrop={this.onDrop}
                    onChangeName={this.onChangeName}
                    onChangeDescription={this.onChangeDescription}/>
            </div>
        );
    }

}