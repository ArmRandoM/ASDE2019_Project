import React, { Component } from 'react';
import BodyProfilePage from './BodyProfilePage';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class ProfilePageManager extends Component {

    constructor() {
        super();
        this.state = {
            loggedUser: '',
            valutationToInsert: "",
            follows:[],
            followers:[],
            patients:[],
            reports: [],
            edit: false,
            nameToEdit:"",
            surnameToEdit:"",
            oldPassword:"",
            newPassword:"",
            biographyToEdit:"",
            imageToEdit:'',
            imageToEditUrl:'',

        }
    }

    //TODO
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
    
    //TODO
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

    insertValutation = (i) =>{
        var report = '';
        var reportsArray = Array.from(this.state.reports);
        for (var j in reportsArray) {
            if (j == i) {
                report = reportsArray[i];
                reportsArray[i].docValutation = this.state.valutationToInsert;
                break;
            }
        }
        this.setState({
            reports: reportsArray
        });
        console.log(report.docValutation)
        let data = new FormData();
        data.append("idReport", report.idReport);
        data.append("docValutation", report.docValutation);
        MedicalCenterBaseIstance.post("/updateReport", data)
            .then((res) => {
                if(!res.data){
                    var reportsArray = Array.from(this.state.reports);
                    for (var j in reportsArray) {
                        if (j == i) {
                            reportsArray[i].docValutation = report.docValutation;
                            break;
                        }
                    }
                    this.setState({
                        reports: reportsArray
                    });  
                }
            }
        )

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

    onValutationChange = (event) => {
        this.setState({
            valutationToInsert: event.target.value
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

    editPassword = () =>{
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
        //this.getPatients();
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
    
    //TODO
    getPatients() {
        var email=localStorage.getItem("email");
        MedicalCenterBaseIstance.get("/getPatients",{params:{"email":email}}).then((res) => {
            this.setState({
                patients: res.data,
            })
        })
    }

    //TODO
    getFollows() {
        var email=localStorage.getItem("email");
        MedicalCenterBaseIstance.get("/getFollows",{params:{"email":email}}).then((res) => {
            this.setState({
                follows: res.data,
            })
        })
    }

    //TODO
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
                    patients={this.state.patients}
                    reports={this.state.reports}
                    selectPatient={this.selectPatient}
                    insertValutation={this.insertValutation}
                    onValutationChange={this.onValutationChange}
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
