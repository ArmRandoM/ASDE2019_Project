import React, { Component } from 'react';
import BodyProfilePage from './BodyProfilePage';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class ProfilePageManager extends Component {

    constructor() {
        super();
        this.state = {
            name: " Bruce ",
            surname: " Wayne ",
            email: " battilemani@batman.bat ",
            password: "batmanèilpiufigo",
            status: "doctor",
            isDoctor: false,
            valutationToInsert: "",
            follows:[
                { status: "Doctor", name: "Darlena Lecroy", followed: true},
                { status: "Doctor", name: "Reda Amador", followed: true},
                { status: "Patient", name: "Logan Hake", followed: true},
                { status: "Doctor", name: "Song Lovely", followed: true},
            ],
            followers:[
                { status: "Patient", name:  "Elfreda Schuette", followed: false},
                { status: "Patient", name: "Malvina Gunnerson", followed: false},
                { status: "Doctor", name: "Rozella Alford", followed: false},
                { status: "Patient", name: "Lianne Stanhope", followed: false},
                { status: "Doctor", name: "Song Lovely", followed: true},
                { status: "Doctor", name: "Chi Trammell", followed: false},
                { status: "Doctor", name: "Laurel Hille", followed: false},
                { status: "Doctor", name: "Reda Amador", followed: true},
                { status: "Patient", name: "Catherina Maillet", followed: false},
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
                { name: "Malvina Gunnerson",
                  image:'',
                  reports: [{name: "3.1 name", description: "3.1 description", image:'', iaValutation:"3.1 iaValutation", docValutation:"3.1 docValutation"},
                            {name: "3.2 name", description: "3.2 description", image:'', iaValutation:"3.2 iaValutation", docValutation:"3.2 docValutation"},
                            {name: "3.3 name", description: "3.3 description", image:'', iaValutation:"3.3 iaValutation", docValutation:"3.3 docValutation"},
                            {name: "3.4 name", description: "3.4 description", image:'', iaValutation:"3.4 iaValutation", docValutation:"3.4 docValutation"}
                           ]
                },
                { name: "Logan Hake",
                  image:'',
                  reports: [{name: "4.1 name", description: "4.1 description", image:'', iaValutation:"4.1 iaValutation", docValutation:"4.1 docValutation"},
                            {name: "4.2 name", description: "4.2 description", image:'', iaValutation:"4.2 iaValutation", docValutation:"4.2 docValutation"},
                            {name: "4.3 name", description: "4.3 description", image:'', iaValutation:"4.3 iaValutation", docValutation:"4.3 docValutation"},
                            {name: "4.4 name", description: "4.4 description", image:'', iaValutation:"4.4 iaValutation", docValutation:"4.4 docValutation"}
                           ]
                },
            ],
            reports: [
                {reportName: "", reportDescription: "", image:'', iaValutation:"", docValutation:""}
            ]
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


        getReports() {
          console.log("SONO DENTRO getReports")
          MedicalCenterBaseIstance.get("/getReportsFromUser", {
              params: {
                  "email": this.state.email,
              }
          }).then((res) => {

              this.setState({
                  reports: res.data
              })
          })

          console.log(this.state.reports);
        }

    render() {
      this.getReports();
        return (
            <div>
                <BodyProfilePage
                    name={this.state.name}
                    surname={this.state.surname}
                    email={this.state.email}
                    password={this.state.password}
                    status={this.state.status}
                    isDoctor={this.state.isDoctor}
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
