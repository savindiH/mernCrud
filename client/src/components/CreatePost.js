import React, { Component } from 'react';
import axios from 'axios';
//import swal from 'sweetalert';



export default class CreatePost extends Component{

    constructor(props){
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:""
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

        const {topic,description,postCategory}= this.state;

        const data={
            topic:topic,
            description:description,
            postCategory:postCategory
        }

        console.log(data)

       //const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    const con = /^[a-zA-Z0-9._*%#+-]+@[a-z0-9]+\. [a-z]{2,3}]+$/;
    const cn = /^[0-9\b]+$/;

  //   if((!con.test(String(topic))) || (topic.length != 5))
  //  {swal("Invalid topic !", "Branch ID should be valide pattern", "error");}

 //    if ((!cn.test(String(description))) || (description.length != 10))
 //   {swal("Invalid Phone Number !", "Phone Number should be valide pattern", "error");}

        axios.post("/post/save",data).then((res)=>{
            if(res.data.success){
                alert("Post Saved Successfully")
                this.setState(
                    {
                        topic:"",
                        description:"",
                        postCategory:""
                    }
                )
            }
        })


    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
         
                <h1 className="h3 mb-3 font-weight-normal" style={{color:'#99e6ff'}}>Create new Post</h1>
                <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}  >Topic</label>
                        <input type="text"
                        className="form-control"
                        name="topic"
                        placeholder="Enter Topic"
                        value={this.state.topic}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Description</label>
                        <input type="text" required
                        className="form-control"
                        name="description"
                        
                        value={this.state.discription}
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

                <button className="btn btn-success" type="submit" onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Save
                </button>


                </form>



            </div>   
        );
    }
    }
