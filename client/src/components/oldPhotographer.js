import React, { Component } from 'react';
import axios from 'axios';

export default class AddNewPhotographer extends Component{
    constructor(props){
        super(props);
        this.state={
            _id:"",
            name:"",
            email:"",
            nic:"",
            address:"",
            contactNo:"",
            gender:"",
            age:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value}= e.target;

        this.setState({
           ...this.state,
            [name]:value
        })

    }

    onSubmit= (e) =>{

        e.preventDefault();

        const {_id,name,email,nic,address,contactNo,gender,age}= this.state;

        const data={
            _id:_id,
            name:name,
            email:email,
            nic:nic,
            address:address,
            contactNo:contactNo,
            gender:gender,
            age:age
        }

        console.log(data)

       axios.post("/photographer/save",data).then((res)=>{
            if(res.data.success){
                alert("Photographer Details Saved Successfully")
                this.setState(
                    {
                        _id:"",
                        name:"",
                        email:"",
                        nic:"",
                        address:"",
                        contactNo:"",
                        gender:"",
                        age:""
                    }
                )
            }
        })
        


    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal"style={{color:'#99e6ff'}}>Add new Photographer</h1>
                <form className="needs-validation" noValidate>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Photographer ID</label>
                        <input type="text"
                        className="form-control"
                        name="_id"
                        placeholder="Enter Photographer ID"
                        value={this.state._id}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Photographer Name</label>
                        <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Photographer Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Photographer Email Address"
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC</label>
                        <input type="text"
                        className="form-control"
                        name="nic"
                        placeholder="Enter Photographer NIC"
                        value={this.state.nic}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter Photographer Address"
                        value={this.state.address}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact NO</label>
                        <input type="text"
                        className="form-control"
                        name="contactNo"
                        placeholder="Enter Photographer Contact Number"
                        value={this.state.contactNo}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Gender</label>
                        <input type="text"
                        className="form-control"
                        name="gender"
                        placeholder="Enter the Gender"
                        value={this.state.gender}
                        onChange={this.handleInputChange}/>
                </div>

            

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Age</label>
                        <input type="text"
                        className="form-control"
                        name="age"
                        placeholder="Enter Photographer Age"
                        value={this.state.age}
                        onChange={this.handleInputChange}/>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Save Photographer
                </button>


                </form>



            </div>   
        );
    }
}