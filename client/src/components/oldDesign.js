import React, { Component } from 'react';
import axios from 'axios';

export default class AddNewDesign extends Component{
    constructor(props){
        super(props);
        this.state={
            _id:"",
            designerId:"",
            material:"",
            description:"",
            qty:""

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

        const {_id,designerId,material,description,qty}= this.state;

        const data={
            _id:_id,
            designerId:designerId,
            material:material,
            description:description,
            qty:qty
        }

        console.log(data)

       axios.post("/design/save",data).then((res)=>{
            if(res.data.success){
                alert("Design Details Saved Successfully")
                this.setState(
                    {
                        _id:"",
                        designerId:"",
                        material:"",
                        description:"",
                        qty:""
                    }
                    
                )
            }
        })
        


    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal" style={{color:'#99e6ff'}} >Add new Design</h1>
                <form className="needs-validation" noValidate>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Design Code</label>
                        <input type="text"
                        className="form-control"
                        name="_id"
                        placeholder="Enter Design Code"
                        value={this.state._id}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Designer ID</label>
                        <input type="text"
                        className="form-control"
                        name="designerId"
                        
                        placeholder="Enter Designer ID"
                        value={this.state.designerId}
                        onChange={this.handleInputChange}/>
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Material</label>
                        <input type="text"
                        className="form-control"
                        name="material"
                        placeholder="Enter Material type"
                        value={this.state.material}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Description</label>
                        <input type="text"
                        className="form-control"
                        name="description"
                        placeholder="Description for the Design"
                        value={this.state.description}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Quantity</label>
                        <input type="text"
                        className="form-control"
                        name="qty"
                        placeholder="Enter Qunanty"
                        value={this.state.qty}
                        onChange={this.handleInputChange}/>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Save Design
                </button>


                </form>



            </div>   
        );
    }
}