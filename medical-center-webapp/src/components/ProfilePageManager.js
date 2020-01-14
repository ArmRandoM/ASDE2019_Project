import React, { Component } from 'react';
import BodyProfilePage from './BodyProfilePage';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class ProfilePageManager extends Component {

    constructor() {
        super();
        this.state = {
            loggedUser: { idUser: 1, name: " Bruce ", surname: " Wayne ", email: " battilemani@batman.bat ",
                          password: "batmanèilpiufigo", image:'', doctor: false,
            },
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
            followsOperationComplete: true,
            followersOperationComplete: true,
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
            emailToEdit:"",
            oldPassword:"",
            newPassword:"",
            imageToEdit:'',

        }
    }

    followOperationOnFollows = (user,i) =>{
        /*
        MedicalCenterBaseIstance.post("/followOperation", {user: user}).then((res) => {
            this.setState({
                followsOperationComplete : res.data
            })
        })
        */
       if(this.state.followsOperationComplete){
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

    followOperationOnFollowers = (user,i) =>{
        /*
        MedicalCenterBaseIstance.post("/followOperation", {user: user}).then((res) => {
            this.setState({
                followersOperationComplete : res.data
            })
        })
        */
       if(this.state.followersOperationComplete){
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

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    insertValutation = (i) =>{
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
        
        var report=this.state.reports[i];
        MedicalCenterBaseIstance.post("/updateReport", {report: report})
          .then((res) => {
              
          }
        )

    }

    deleteReport = (i) =>{
        var report=this.state.reports[i];
        console.log(report);
        MedicalCenterBaseIstance.post("/deleteReport", {report: report})
          .then((res) => {
              
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
        MedicalCenterBaseIstance.post("/editData", {
          idUser: this.state.loggedUser.idUser,
          name: this.state.nameToEdit,
          surname: this.state.surnameToEdit,
          email: this.state.emailToEdit,
          image: this.state.imageToEdit,
        }).then((res) => {
            this.setState({
                edit : false
            })
        })
    }

    editPassword = () =>{
        MedicalCenterBaseIstance.post("/editPassword", {
          idUser: this.state.loggedUser.idUser,
          oldPassword: this.state.oldPassword,
          newPassword: this.state.newPassword,
        }).then((res) => {
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
            imageToEdit: reader.result
          });
        }

        reader.readAsDataURL(file)
    }


    componentDidMount(){
        this.getLoggedUser();
        this.getReports();
    }

    getLoggedUser() {
        MedicalCenterBaseIstance.get("/getLoggedUser").then((res) => {
            console.log(res.data)
            this.setState({
                loggedUser: res.data
            })
        })
        console.log(this.state.loggedUser)
    }

    getReports() {
        MedicalCenterBaseIstance.get("/getReportsFromUser", {
            params: {
                "email": this.state.loggedUser.email,
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
