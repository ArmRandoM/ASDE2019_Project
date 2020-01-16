import React, { Component } from 'react';
import BodyProfilePage from './BodyProfilePage';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class ProfilePageManager extends Component {

    constructor() {
        super();
        this.state = {
            loggedUser: '',
            follows:[],
            followers:[],
            patients:[],
            reports: [],
            edit: false,
            nameReportToEdit:"",
            descriptionReportToEdit:"",
            nameToEdit:"",
            surnameToEdit:"",
            oldPassword:"",
            newPassword:"",
            biographyToEdit:"",
            imageToEdit:'',
            imageToEditUrl:'',
            editReport: [],
        }
    }

    followOperationOnFollows = (user,i) =>{
        MedicalCenterBaseIstance.post("/followOperation", {user: user})
            .then((res) => {
                if(res.data){
                    var followsArray = Array.from(this.state.follows);
                    for (var j in followsArray) {
                        if (j == i) {
                            followsArray[i].followed = !followsArray[i].followed;
                        break;
                        }
                    }
                    this.setState({
                        follows: followsArray
                    });
                
                }
            }
        )
    }
    
    followOperationOnFollowers = (user,i) =>{
        MedicalCenterBaseIstance.post("/followOperation", {user: user})
            .then((res) => {
                if(res.data){
                    var followersArray = Array.from(this.state.followers);
                    for (var j in followersArray) {
                        if (j == i) {
                            followersArray[i].followed = !followersArray[i].followed;
                        break;
                        }
                    }
                    this.setState({
                        followers: followersArray
                    });
                }
            }
        )
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    updateReport = (i) =>{
        var nameDescriptionReg = /[A-Za-z]+/;
        var nameReportTest = nameDescriptionReg.test(this.state.nameReportToEdit);
        var descriptionReportTest = nameDescriptionReg.test(this.state.descriptionReportToEdit);

        if (nameReportTest && descriptionReportTest)
        {
            var report = '';
            var reportsArray = Array.from(this.state.reports);
            for (var j in reportsArray) {
                if (j == i) {
                    report = reportsArray[i];
                    reportsArray[i].reportDescription = this.state.descriptionReportToEdit;
                    reportsArray[i].reportName = this.state.nameReportToEdit;
                    break;
                }
            }
            this.setState({
                reports: reportsArray
            });
            console.log(report)
            let data = new FormData();
            data.append("idReport", report.idReport);
            data.append("reportDescription", report.reportDescription);
            data.append("reportName", report.reportName);
            MedicalCenterBaseIstance.post("/updateReport", data)
                .then((res) => {
                    if(!res.data){
                        var reportsArray = Array.from(this.state.reports);
                        for (var j in reportsArray) {
                            if (j == i) {
                                report = reportsArray[i];
                                reportsArray[i].reportDescription = this.state.descriptionReportToEdit;
                                reportsArray[i].reportName = this.state.nameReportToEdit;
                                break;
                            }
                        }
                        this.setState({
                            reports: reportsArray
                        });  
                        
                    }
                    this.setEditReport(i); 
                }
            )
        }
    }

    deleteReport = (i) =>{
        var report=this.state.reports[i];
        let data = new FormData();
        data.append("idReport", report.idReport);
        MedicalCenterBaseIstance.post("/deleteReport", data)
            .then((res) => {   
                if(res.data){               
                    var reportsArray = [];
                    for (var j in this.state.reports) {
                        if (j != i) {
                        reportsArray.push(this.state.reports[j]);
                        }
                    }
                    this.setState({
                        reports: reportsArray
                    });
                }      
            }
        )
    }

    onReportNameChange = (event) => {
        this.setState({
            nameReportToEdit: event.target.value
        });
    }

    onReportDescriptionChange = (event) => {
        this.setState({
            descriptionReportToEdit: event.target.value
        });
    }
    
    setEditReport = (i) =>{
        this.state.editReport[i] = !this.state.editReport[i];
        this.setState({
            editReport: this.state.editReport
        });
    }

    selectPatient = (patient) =>{
        this.setState({
            reports: patient.reports
        });
    }

    setEdit = () =>{
        this.setState({
            edit: !this.state.edit
        });
    }
    
    editData = () =>{
        const config = {
            headers: { 'content-type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p' }
        };
        
        var nameSurnameReg = /[A-Za-z]+/;
        var nameTest = nameSurnameReg.test(this.state.nameToEdit);
        var surnameTest = nameSurnameReg.test(this.state.surnameToEdit);

        if (surnameTest && nameTest)
        {
            let data = new FormData();
            data.append("idUser", this.state.loggedUser.idUser);
            data.append("name", this.state.nameToEdit);
            data.append("surname", this.state.surnameToEdit);
            data.append("biography", this.state.biographyToEdit);
            data.append("image", this.state.imageToEdit);
            console.log(this.state.imageToEdit)
            MedicalCenterBaseIstance.post("/editData", data, config).then((res) => { 
                if(res.data){
                    window.location.href="/profilepg";
                }
            })
        }

    }

    editPassword = () =>{
        
        var passwordReg = /[a-zA-Z0-9-?!@#$%^&* ]{8,}/;
        var passwordTest = passwordReg.test(this.state.passwordSignUp);
        if(passwordTest){
            let data = new FormData();
            data.append("idUser", this.state.loggedUser.idUser);
            data.append("oldPassword", this.state.oldPassword);
            data.append("newPassword", this.state.newPassword);
            MedicalCenterBaseIstance.post("/editPassword", data).then((res) => {
                if(res.data){
                    window.location.href="/profilepg";
                }
            })
        }
    }

    uploadImage = (event) => {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
          this.setState({
            imageToEdit:file,
            imageToEditUrl: reader.result
          });
        }
        reader.readAsDataURL(file)
    }

    componentDidMount(){
        this.getLoggedUser();
        //this.getFollows();
        //this.getFollowers();
        this.getReports();
    }

    getLoggedUser() {
        var email=localStorage.getItem("email");
        MedicalCenterBaseIstance.get("/getLoggedUser",{params:{"email":email}}).then((res) => {
            this.setState({
                loggedUser: res.data,
                nameToEdit: res.data.name,
                surnameToEdit: res.data.surname,
                imageToEdit: res.data.image,
                biographyToEdit: res.data.biography,
            })
        })
    }

    getFollows() {
        var email=localStorage.getItem("email");
        MedicalCenterBaseIstance.get("/getFollows",{params:{"email":email}}).then((res) => {
            this.setState({
                follows: res.data,
            })
        })
    }

    getFollowers() {
        var email=localStorage.getItem("email");
        MedicalCenterBaseIstance.get("/getFollowers",{params:{"email":email}}).then((res) => {
            this.setState({
                followers: res.data,
            })
        })
    }

    getReports() {
        var email=localStorage.getItem("email");
        MedicalCenterBaseIstance.get("/getReportsFromUser", {
            params: {
                "email": email,
            }
        }).then((res) => {
            this.setState({
                reports: res.data
            })
            this.state.reports.forEach(r => {
                this.state.editReport.push(false);
            });
        })
    }

    render() {
        return (
            <div>
                <BodyProfilePage
                    loggedUser={this.state.loggedUser}
                    uploadImage={this.uploadImage}
                    imageToEdit={this.state.imageToEdit}
                    imageToEditUrl={this.state.imageToEditUrl}
                    nameToEdit={this.state.nameToEdit}
                    surnameToEdit={this.state.surnameToEdit}
                    biographyToEdit={this.state.biographyToEdit}
                    editPassword={this.editPassword}
                    setEdit={this.setEdit}
                    editData={this.editData}
                    deleteReport={this.deleteReport}
                    edit={this.state.edit}
                    editReport={this.state.editReport}
                    setEditReport={this.setEditReport}
                    patients={this.state.patients}
                    reports={this.state.reports}
                    selectPatient={this.selectPatient}
                    updateReport={this.updateReport}
                    onReportDescriptionChange={this.onReportDescriptionChange}
                    onReportNameChange={this.onReportNameChange}
                    onChange={this.onChange}
                    follows={this.state.follows}
                    followers={this.state.followers}
                    followOperationOnFollows={this.followOperationOnFollows}
                    followOperationOnFollowers={this.followOperationOnFollowers}
                />
            </div>
        );
    }

}
