import React, { Component } from 'react';
import axios from 'axios';

export default class AddNewLocation extends Component{
    constructor(props){
        super(props);
        this.state={
            _id:"",
            ownerName:"",
            venue:"",
            email:"",
            contactNo:""
           
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

        const {_id,ownerName,venue,email,contactNo}= this.state;

        const data={
            _id:_id,
            ownerName:ownerName,
            venue:venue,
            email:email,
            contactNo:contactNo,
           
        }

        console.log(data)

       axios.post("/location/save",data).then((res)=>{
            if(res.data.success){
                alert("Location Details Saved Successfully")
                this.setState(
                    {
                        _id:"",
                        ownerName:"",
                        venue:"",
                        email:"",
                        contactNo:""
                        
                    }
                )
            }
        })
        


    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal" style={{color:'#99e6ff'}}>Add new Location</h1>
                <form className="needs-validation" noValidate>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Location ID</label>
                        <input type="text"
                        className="form-control"
                        name="_id"
                        placeholder="Enter Location ID"
                        value={this.state._id}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Location Owner Name</label>
                        <input type="text"
                        className="form-control"
                        name="ownerName"
                        placeholder="Enter Location Owner Name"
                        value={this.state.ownerName}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Venue</label>
                        <input type="text"
                        className="form-control"
                        name="venue"
                        placeholder="Enter the Venue of the Location"
                        value={this.state.venue}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter relevant Email Address"
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                </div>

               

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact NO</label>
                        <input type="text"
                        className="form-control"
                        name="contactNo"
                        placeholder="Enter Location Contact Number"
                        value={this.state.contactNo}
                        onChange={this.handleInputChange}/>
                </div>

             
            
                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Save Location
                </button>


                </form>



            </div>   
        );
    }
}