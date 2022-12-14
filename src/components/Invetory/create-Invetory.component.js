import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";
import Navbar from "../../components/navbar.component"


export default class CreateInvetory extends Component {
    constructor(props) {
        super(props);


//Add data to the form
        
        this.onChangeItemid = this.onChangeItemid.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeqty = this.onChangeqty.bind(this);
        this.onChangeSupplier = this.onChangeSupplier.bind(this);
        this.onChangePDate = this.onChangePDate.bind(this);
        this.onChangePPrice = this.onChangePPrice.bind(this);
        this.onChangeSPrice= this.onChangeSPrice.bind(this);
        this.onChangeTProfit= this.onChangeTProfit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.Demo = this.Demo.bind(this);


        this.state = {
            Itemid: "",
            Name: "",
            Brand:"",
            qty: "",
            Supplier: "",
            PDate: "",
            PPrice: "",
            SPrice: "",
            TProfit: "",
            Invetory: [],
        };
    }

   
  //set the Itemid

  onChangeItemid(e) {
    this.setState({
        Itemid: e.target.value,
    });
}

//set the Name

onChangeName(e) {
    this.setState({
        Name: e.target.value,
    });
}

//set Brand
onChangeBrand(e) {
    this.setState({
        Brand: e.target.value,
    });
}

//set qty




onChangeqty(e) {
    this.setState({
        qty: e.target.value,
    });
}

//set Supplier
onChangeSupplier(e) {
    this.setState({
        Supplier: e.target.value,
    });
}

//set PDate
onChangePDate(e) {
    this.setState({
        PDate: e.target.value,
    });
}

//set PPrice
onChangePPrice(e) {
  
    this.setState({
        
        PPrice: e.target.value,
      
    });
   
}

//set SPrice
onChangeSPrice(e) {
   
    this.setState({
        
        SPrice: e.target.value,
        
       

       
       
        
    });
   
}



//Demo butten

onChangeTProfit(e) {
    this.setState({
        TProfit: e.target.value,
    });
}
Demo() {
    
      
    this.setState({
        
        
        Itemid:"IT0003",
                Name:"Tayar",
                Brand:"Honda",
                qty:"1",
                Supplier:"ABC(Pvt)Ltd",
                PDate:"2022-05-26",
                PPrice:"100",
                SPrice: "200",
                TProfit:"4000"
    });
}




    //submit Function

    onSubmit(e) {
        e.preventDefault();
        
        const { Itemid} = this.state;
        const Invetory = {
            Itemid: this.state.Itemid,
                Name: this.state.Name,
                Brand: this.state.Brand,
                qty: this.state.qty,
                Supplier: this.state.Supplier,
                PDate: this.state.PDate,
                PPrice: this.state.PPrice,
                SPrice: this.state.SPrice,
                TProfit: this.state.TProfit,
               
            };


            console.log(Invetory);


            //validation 
            // Item ID validation

            if (Itemid.length < 4) {
                swal("Itemid invalid !", "Itemid should be greater than 4", "error");
            } else {

            axios
                .post("http://localhost:5000/Invetory/add", Invetory)
                .then((res) => console.log(res.data));

                //done messege

            swal({
                title: "Done!",
                text: "Create Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Invetory/"));
            });
            }
    }

    render() {
        return (<div  >
            <Navbar/>
           <div class = "row ">
           <div class = "col-6" >
           <br/>
           <img src="http://content.presentermedia.com/files/animsp/00005000/5077/warehouse_picker_picking_PA_md_wm.gif" width="70%" height="60%" />
           <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/oie_18181349Nu3swh07.gif?13624347068348444578" width="60%" height="40%" />
           </div> <div class = "col-6" >
           <div div class = "myformstyle" >
           <div className = "card-body" >
           <div className = "col-md-8 mt-4 mx-auto" > </div> 
           <h3 className = "text-center" > 
           <font face = "Comic sans MS" size = "6" > Add To Inventory </font>
           </h3 > <br></br>
           
           <br></br>
           
            <form onSubmit = { this.onSubmit } >

            



           
           <div className = "form-group" >
          
           <label >Item ID: </label> 
          
           <input type = "text"
           placeholder = " Item ID"
           required  className = "form-control"
           value = { this.state.Itemid }
           onChange = { this.onChangeItemid }/>
            </div > 
            
             

           <div className = "form-group" >
           <label > Item Name: </label> 
           <input type = "text"
           placeholder = "Item Name"
           required  className = "form-control"
           value = { this.state.Name }
           onChange = { this.onChangeName }/>
            </div > 

           


            <div className = "form-group" >
            <label > Brand: </label> 
            <select ref = "Brand"
            placeholder = "Brand"
            required className = "form-control"
            value = { this.state.Brand }
            onChange = { this.onChangeBrand } >
            <option value = "Honda" > Honda </option> 
            <option value = "BMW " > BMW </option>
            <option value = "Mazda" > Mazda </option> 
            <option value = "Nissan " > Nissan </option>
            <option value = "Toyota " > Toyota </option>
            <option value = "Mitsubishi " > Mitsubishi </option>
            </select > </div>

            <div className = "form-group" >
           <label > Qty: </label> 
           <input type = "number"
           placeholder = "Qty"
           required  className = "form-control"
           value = { this.state.qty }
           onChange = { this.onChangeqty }/>
            </div >


            <div className = "form-group" >
           <label > Supplier: </label> 
           <input type = "text"
           placeholder = "Supplier"
           required  className = "form-control"
           value = { this.state.Supplier }
           onChange = { this.onChangeSupplier }/>
            </div >

            <div className = "form-group" >
           <label > Purchased Date: </label> 
           <input type = "date"
           placeholder = "Purchased Date"
           required  className = "form-control"
           value = { this.state.PDate }
           onChange = { this.onChangePDate }/>
            </div >

            <div className = "form-group" >
           <label > Purchased price: </label> 
           <input type = "number"
           placeholder = "Purchased Price"
           required  className = "form-control"
           value = { this.state.PPrice }
           onChange = { this.onChangePPrice }/>
            </div >


          


            <div className = "form-group" >
           <label > Selling Price: </label> 
           <input type = "number"
           placeholder = "Selling Price"
           required  className = "form-control"
           value = { this.state.SPrice }
           onChange = { this.onChangeSPrice }/>
            </div >

            <div className = "form-group" >
           <label > Total Profit: </label> 
           <input type = "Number"
        
           placeholder = "Total Profit"
           required  className = "form-control"
           value = { this.state.TProfit }
           onChange = { this.onChangeTProfit }/>
            </div >

           
            <div div class = "myformstyle" style = {{ float: 'right' }} >
           
           <Button data-inline ="true" variant = "btn btn-warning" onClick ={this.Demo}> DEMO </Button> 
           </div >
            

           <div className = "form-group" >
           <input type = "submit"
           value = "Submit "
           className = "btn btn-primary" />
           </div>{" "} </form >  </div> </div > </div>
            </div ><br/> <br/>  </div>
        );
    }
}