
import React, { Component } from 'react';
import axios from 'axios';


export default class CreatePost extends Component{

    constructor(props){
        super(props);
        this.state={
            topic:null,
            email:null,
            postCategory:null,
           errors: {
                topic:'',
                email:'',
                postCategory:'',
            }
        }
    }

  onSubmit= (e) =>{

        e.preventDefault();

        const {topic,email,postCategory}= this.state;

        const data={
            topic:topic,
            email:email,
            postCategory:postCategory
        }
        console.log(data)

        axios.post("/post/save",data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        topic:"",
                        email:"",
                        postCategory:""
                    }
                )
            }
        })


    }

    render(){
        return(
            
        
            (<div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new Post</h1>
                <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Topic</label>
                        <input type="text"
                        className="form-control"
                        name="topic"
                        placeholder="Enter Topic"
                        value={this.state.topic}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Post Category</label>
                        <input type="text"
                        className="form-control"
                        name="postCategory"
                        placeholder="Enter Post Category"
                        value={this.state.postCategory}
                        onChange={this.handleInputChange}/>
                </div>

                <button onClick={this.submitPost} type="submit" style={{marginTop:'15px'}}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Save
                </button>
               
               
                </form>



            </div> 
            )
    
    
              
        )      
        
    }
}




