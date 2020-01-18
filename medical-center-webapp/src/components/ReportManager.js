import React, { Component } from 'react';
import Report from './Report'
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

class ReportsManager extends Component {

    constructor(props) {
        super();
        this.state = {
            idReport: props.idReport,
            reportName: props.reportName,
            reportDescription: props.reportDescription,
            image: props.image,
            iaValutation: props.iaValutation,
            docValutation: props.docValutation,
            nameReportToEdit: '',
            descriptionReportToEdit: '',
            visible: true,
            edit: false
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.name + " " + event.target.value);
    }

    deleteReport = () => {
        MedicalCenterBaseIstance.post("/deleteReport", null, { params: { idReport: this.state.idReport } }).then((res) => {
            if (res.data) {
                this.setState({
                    visible: false
                });
            }
        }
        )
    }

    updateReport = () => {
        var nameDescriptionReg = /[A-Za-z]+/;
        var nameReportTest = nameDescriptionReg.test(this.state.nameReportToEdit);
        var descriptionReportTest = nameDescriptionReg.test(this.state.descriptionReportToEdit);

        if (nameReportTest && descriptionReportTest) {
            let data = new FormData();
            data.append("idReport", this.state.idReport);
            data.append("reportDescription", this.state.descriptionReportToEdit);
            data.append("reportName", this.state.nameReportToEdit);
            MedicalCenterBaseIstance.post("/updateReport", data).then((res) => {
                if (res.data) {
                    this.setState({
                        reportName: this.state.nameReportToEdit,
                        reportDescription: this.state.descriptionReportToEdit
                    });
                    this.switchToEdit();
                }
            })
        }
    }


    switchToEdit = () => {
        this.setState({
            edit: !this.state.edit
        });
    }

    render() {
        return (
            < div >
                {
                    this.state.visible ?
                        <Report
                            name={this.state.reportName}
                            switchToEdit={this.switchToEdit}
                            edit={this.state.edit}
                            description={this.state.reportDescription}
                            image={this.state.image}
                            value={this.state.iaValutation}
                            deleteReport={this.deleteReport}
                            updateReport={this.updateReport}
                            onChange={this.onChange}
                        />
                        : null
                }
            </div >
        );
    }
}

export default ReportsManager;
