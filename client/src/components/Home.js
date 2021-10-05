import React, { Component } from 'react';
import axios from 'axios';
import jsPdf from 'jspdf';
import 'jspdf-autotable';




export default class Home extends Component {
constructor(props){
   super(props);

   this.state={
     posts:[]
   };
   
}


componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("posts").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPost
      });

      console.log(this.state.posts)
    }
  });

}

onDelete = (id) =>{

  axios.delete(`/post/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){

  const result = posts.filter((post) =>
  post.topic.toLowerCase().includes(searchKey)||
  post.email.toLowerCase().includes(searchKey)||
  post.postCategory.toLowerCase().includes(searchKey)

  )

this.setState({posts:result})

}


handleSearchArea = (e) =>{

  const searchKey=e.currentTarget.value

    axios.get("/posts").then(res=>{
      if(res.data.success){

        this.filterData(res.data.existingPost,searchKey)
      }
    });
}

//pdf generating
jsPdfGenerator = () => {

  //new document in jspdf
  var doc = new jsPdf('p','pt');

  doc.text(210,30,"Post")
  doc.autoTable({  html:'#my-pdf' })

  doc.autoTable({
    columnStyles: { europe: { halign: 'center' } }, 
    margin: { top: 10 },
  })

  //save the pdf
  doc.save("Post.pdf");
}

render() {

  return (
    <div className="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background
    <div className="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
       <h4>All posts</h4>
       </div>
       <div className="col-lg-3 mt-2 mb-2">
         <input
         className="form-control"
         type="search"
         placeholder="Search"
         name="searchQuery"
         onChange={this.handleSearchArea}>

           </input>
           </div>
           </div>
         <table className="table table-hover" id="my-pdf" style={{marginTop:'40px'}}>
           <thead>
             <tr>
             <th scope="col">#</th>
             <th scope="col">Topic</th>
             <th scope="col">Email</th>
             <th scope="col">Post Category</th>
             <th scope="col">Action</th>
             </tr>
           </thead>
           <tbody>

             {this.state.posts.map((posts,index)=>(
               <tr key={index+1}>
                 <th scope="row">{index+1}</th>
                 <td>
                     <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                     
                     {posts.topic}
                     </a>
                     </td>
                 <td>{posts.description}</td>
                 <td>{posts.postCategory}</td>
                 <td>
                   <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Edit
                     </a>
                     &nbsp;

                    <a className="btn btn-danger"href="#" onClick={()=>this.onDelete(posts._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a> 
                     
                

                   </td>

                   </tr>
             ))}
           </tbody>
         </table>

         

            <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Post</a></button>
         <br/>
         <br/>
         <br/>
            <button type="button" onClick={this.jsPdfGenerator}  class="btn btn-primary">PDF</button>
            
         </div>
     </div>
  
        );
      }
    }

    
  
