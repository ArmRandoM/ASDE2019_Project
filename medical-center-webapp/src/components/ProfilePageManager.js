import React, { Component } from 'react';
import BodyProfilePage from './BodyProfilePage';
//import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

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
                { name: "Logan Hake",
                  image:'',
                  reports: [{name: "4.1 name", description: "4.1 description", image:'', iaValutation:"4.1 iaValutation", docValutation:"4.1 docValutation"},
                            {name: "4.2 name", description: "4.2 description", image:'', iaValutation:"4.2 iaValutation", docValutation:"4.2 docValutation"},
                            {name: "4.3 name", description: "4.3 description", image:'', iaValutation:"4.3 iaValutation", docValutation:"4.3 docValutation"},
                            {name: "4.4 name", description: "4.4 description", image:'', iaValutation:"4.4 iaValutation", docValutation:"4.4 docValutation"}
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
            reports: [{name: "1 name", description: "1 description", image:'', iaValutation:"1 iaValutation", docValutation:"1 docValutation"},
                      {name: "2 name", description: "2 description", image:'', iaValutation:"2 iaValutation", docValutation:"2 docValutation"},
                      {name: "3 name", description: "3 description", image:'', iaValutation:"3 iaValutation", docValutation:"3 docValutation"},
                      {name: "4 name", description: "4 description", image:'', iaValutation:"4 iaValutation", docValutation:"4 docValutation"}
            ]
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    insertValutation = (report) =>{
        report.docValutation = this.state.valutationToInsert
        console.log(report.docValutation)
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

    render() {
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
                />
            </div>
        );
    }

}