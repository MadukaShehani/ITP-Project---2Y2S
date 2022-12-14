import React, { Component } from "react";
import axios from "axios";

import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";
import Navbar from "../../components/navbar.component"


export default class CreateCustomer extends Component {
    constructor(props) {
        super(props);

        this.onChangeCID = this.onChangeCID.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.Demo = this.Demo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            NIC: "",
            Name: "",
            Email:"",
            Phone: "",
            Address: "",
            CID: "",
            Customer: [],
        };
    }

   
   //set the NIC

   onChangeNIC(e) {
    this.setState({
        NIC: e.target.value,
    });
}

//set the Name

onChangeName(e) {
    this.setState({
        Name: e.target.value,
    });
}

//set Email
onChangeEmail(e) {
    this.setState({
        Email: e.target.value,
    });
}

//set CID
onChangeCID(e) {
    this.setState({
        CID: e.target.value,
    });
}

//set Phone




onChangePhone(e) {
    this.setState({
        Phone: e.target.value,
    });
}



//set Address
onChangeAddress(e) {
    this.setState({
        Address: e.target.value,
    });
}



Demo() {
   
    this.setState({
        CID: "1256",
        NIC: "362598125V",
        Name: "Oshadha",
        Email: "oshadha@gmail.com",
        Phone: "0123456789",
        Address: "Bandarawela"




    });
   
}



    //submit Function

    onSubmit(e) {
        e.preventDefault();
        
        const {Phone,CID} = this.state;
        const Customer = {
            CID: this.state.CID,
            NIC: this.state.NIC,
            Name: this.state.Name,
            Email: this.state.Email,
            Phone: this.state.Phone,
            Address: this.state.Address,
               
            };

            console.log(Customer);

            const cup = /^[0-9\b]+$/;

            if (CID.length < 4) {
                swal("Customer ID invalid !", "Customer ID should be greater than 4", "error");
            } else if((!cup.test(String(Phone))) || (Phone.length != 10)) {
                swal("Invalid Contact Number !", "contact number should be valide pattern", "error");

            }else {
            axios.post("http://localhost:5000/Customer/add", Customer)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Create Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Customer/"));
            });
                }
                
    }

    render() {
        return (<div  >
            <Navbar/>
           <div class = "row ">
           <div class = "col-6" >
           <br/>
           <img src="https://classroomclipart.com/images/gallery/Animations/Graduation/student-grad-jumping-animated-clipart-crca.gif" width="60%" height="40%" />
           </div> <div class = "col-6" >
           <div div class = "myformstyle" >
           <div className = "card-body" >
           <div className = "col-md-8 mt-4 mx-auto" > </div> 
           <h3 className = "text-center" > 
           <font face = "Comic sans MS" size = "6" > Create Customer </font>
           </h3 > <br></br>
           
           <br></br>
           
            <form onSubmit = { this.onSubmit } >

            <div className = "form-group" >
           <label >Custome ID: </label> 
           <input type = "text"
           placeholder = "Customer CID"
           required className = "form-control"
           value = { this.state.CID }
           onChange = { this.onChangeCID }/> 
           </div>


           <div className = "form-group" >
           <label >Custome NIC: </label> 
           <input type = "text"
           placeholder = "Customer NIC"
           required className = "form-control"
           value = { this.state.NIC }
           onChange = { this.onChangeNIC }/> 
           </div>
           
           
            <div className = "form-group" >
          
           <label >  Name : </label>
           <input type = "text"
           placeholder = "Name "
           required className = "form-control"
           value = { this.state.Name }
           onChange = { this.onChangeName }
           /> 
           </div >  

           <div className = "form-group" >
           <label > Address: </label> 
           <input type = "text"
           placeholder = "Address"
           required  className = "form-control"
           value = { this.state.Address }
           onChange = { this.onChangeAddress }/>
            </div >

           <div className = "form-group" >
          
           <label > Email: </label> 
          
           <input type = "email"
           placeholder = "Email"
           required  className = "form-control"
           value = { this.state.Email }
           onChange = { this.onChangeEmail }/>
            </div > 
            
             

           <div className = "form-group" >
           <label > Phone: </label> 
           <input type = "Number"
           placeholder = "Phone"
           required  className = "form-control"
           value = { this.state.Phone }
           onChange = { this.onChangePhone }/>
            </div > 
            <div div class = "myformstyle" style = {{ float: 'right' }} >
           
           <Button data-inline ="true" variant = "btn btn-warning" onClick ={this.Demo}> DEMO </Button> 
           </div >

           <div className = "form-group" >
           <input type = "submit"
           value = "Create "
           className = "btn btn-primary" />
           </div>{" "} </form >  </div> </div > </div>
            </div ><br/> <br/>  </div>
        );
    }
}