import React, { Component } from 'react';
import BodyProfilePage from './BodyProfilePage';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class ProfilePageManager extends Component {

    constructor() {
        super();
        this.state = {
            loggedUser: '',
            valutationToInsert: "",
            follows:[
                { status: "Doctor", name: "Darlena Lecroy", followed: true},
                { status: "Patient", name: "Logan Hake", followed: true},
                { status: "Doctor", name: "Song Lovely", followed: true},
            ],
            followers:[
                { status: "Patient", name:  "Elfreda Schuette", followed: false},
                { status: "Patient", name: "Malvina Gunnerson", followed: false},
                { status: "Doctor", name: "Rozella Alford", followed: false},
                { status: "Patient", name: "Lianne Stanhope", followed: false},
                { status: "Doctor", name: "Song Lovely", followed: true},
                { status: "Patient", name: "Logan Hake", followed: true},
                { status: "Doctor", name: "Darlena Lecroy", followed: true},
            ],
            patients:[
                { name: "Catherina Maillet",
                  image:'',
                  reports: [{name: "1.1 name", description: "1.1 description", image:'', iaValutation:"1.1 iaValutation", docValutation:" 1.1 docValutation"},
                            {name: "1.2 name", description: "1.2 description", image:'', iaValutation:"1.2 iaValutation", docValutation:" 1.2 docValutation"},
                            {name: "1.3 name", description: "1.3 description", image:'', iaValutation:"1.3 iaValutation", docValutation:" 1.3 docValutation"},
                            {name: "1.4 name", description: "1.4 description", image:'', iaValutation:"1.4 iaValutation", docValutation:" 1.4 docValutation"}
                           ]
                },
                { name:  "Elfreda Schuette",
                  image:'',
                  reports: [{name: "2.1 name", description: "2.1 description", image:'', iaValutation:"2.1 iaValutation", docValutation:" 2.1 docValutation"},
                            {name: "2.2 name", description: "2.2 description", image:'', iaValutation:"2.2 iaValutation", docValutation:"2.2 docValutation"},
                            {name: "2.3 name", description: "2.3 description", image:'', iaValutation:"2.3 iaValutation", docValutation:"2.3 docValutation"},
                            {name: "2.4 name", description: "2.4 description", image:'', iaValutation:"2.4 iaValutation", docValutation:"2.4 docValutation"}
                           ]
                },
            ],
            reports: [],
            edit: false,
            nameToEdit:"",
            surnameToEdit:"",
            oldPassword:"",
            newPassword:"",
            imageToEdit:'',
            imageToEditUrl:'',

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

    insertValutation = (i) =>{
        var report=this.state.reports[i];
        MedicalCenterBaseIstance.post("/updateReport", {report: report})
            .then((res) => {
                if(res.data){
                    var reportsArray = Array.from(this.state.reports);
                    for (var j in reportsArray) {
                        if (j == i) {
                        reportsArray[i].docValutation = this.state.valutationToInsert;
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
        MedicalCenterBaseIstance.post("/deleteReport", {report: report})
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
        data.append("image", this.state.imageToEdit);
        MedicalCenterBaseIstance.post("/editData", data, config).then((res) => {    
            this.setState({
                edit : false
            })
        })
    }

    editPassword = () =>{
        let data = new FormData();
        data.append("idUser", this.state.loggedUser.idUser);
        data.append("oldPassword", this.state.oldPassword);
        data.append("newPassword", this.state.newPassword);
        MedicalCenterBaseIstance.post("/editPassword", data).then((res) => {
            this.setState({
                edit : false
            })
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
