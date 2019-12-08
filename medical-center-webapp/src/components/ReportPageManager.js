import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodyReportPage from './BodyReportPage';

export default class ReportPageManager extends Component {
    
    constructor() {
        super();
        this.state = {
        }
    }

    logOut = (event) =>{
        
    }

    getReports = (event) =>{
        
    }

    addReport = (event) =>{
        
    }

    evaluateReport = (event) =>{
        
    }


    render() {
        return (
            <div>
                <MenuBar
                    logOut={this.state.logOut}/>
                <BodyReportPage
                    getReports={this.state.getReports}
                    addReport={this.state.addReport}
                    evaluateReport={this.state.evaluateReport}/>
            </div>
        );
    }

}