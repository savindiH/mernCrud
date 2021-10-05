
import React, { Component } from 'react';
import axios from 'axios';


export default class CreateSupplier extends Component{

    constructor(props){
        super(props);
        this.state={
            nic:"",
            firstName:"",
            lastName:"",
            dob:"",
            email:"",
            address:"",
            contractCode:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value}= e.target;

        this.setState({
           ... this.state,
            [name]:value
        })

    }

    onSubmit= (e) =>{

        e.preventDefault();

        const {nic,firstName,lastName,dob,email,address,contractCode}= this.state;

        const data={
            nic:nic,
            firstName:firstName,
            lastName:lastName,
            dob:dob,
            email:email,
            address:address,
            contractCode:contractCode
        }

        console.log(data)

      
        axios.post("/supplier/save",data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        nic:"",
                        firstName:"",
                        lastName:"",
                        dob:"",
                        email:"",
                        address:"",
                        contractCode:""
                    }
                )
            }
        })


    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add new Supplier</h1>
                <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC</label>
                        <input type="text"
                        className="form-control"
                        name="nic"
                        placeholder="Enter NIC"
                        value={this.state.nic}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>First Name</label>
                        <input type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="Enter the First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Last Name</label>
                        <input type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Enter the Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Date of Birth</label>
                        <input type="text"
                        className="form-control"
                        name="dob"
                        placeholder="Enter the Date of Birth"
                        value={this.state.dob}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter the Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter the Address"
                        value={this.state.address}
                        onChange={this.handleInputChange}/>
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contract Code</label>
                        <input type="text"
                        className="form-control"
                        name="contractCode"
                        placeholder="Enter the Contract Code"
                        value={this.state.contractCode}
                        onChange={this.handleInputChange}/>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Save
                </button>
                
                </form>



            </div>   
        );
    }
}
