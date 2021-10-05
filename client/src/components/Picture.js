import React, { Component } from 'react';
import Pic1 from '../Pic1.jpg';
import Pic2 from '../Pic2.jpg';
import Pic3 from '../Pic3.jpg';
import Pic4 from '../Pic4.jpg';
import Pic5 from '../Pic5.jpg';
import Pic6 from '../Pic6.jpg';





export default class Home extends Component{
    render(){
        return(
            
          
  

<div className="container">
  <div className="row">

    <p><br/></p>
    <p><br/></p>


    <center><h1 style={{color:"yellow"}} >Home</h1></center>
    <p><br/></p>
    <p><br/></p>


    <div className="col-sm-4">
       <button>
       <a href=""> <img src={Pic1} alt='Picture1'  style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
      <p><a href=""> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>01</button></a></p>
    </div>

    <div className="col-sm-4">
       <button>
       <a href=""> <img src={Pic2} alt='Picture2' style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
      <p><a href=""> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>02</button></a></p>
    </div>


   

    <div className="col-sm-4">
       <button>
       <a href=""><img src={Pic3} alt='Picture3'  style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
      <p> <a href=""><button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>03</button></a></p>
    </div>

    <p><br/></p>
    <p><br/></p>

    <div className="col-sm-4">
       <button>
       <a href=""><img src={Pic4} alt='Picture4' style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
      <p> <a href=""> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>04</button></a></p>
    </div>

    <div className="col-sm-4">
       <button>
       <a href=""><img  src={Pic5} alt='Picture5'  style={{width:'300px', height:'300px', }}/></a>
      </button>
      <p></p>
      <p><a href=""> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>05</button></a></p>
    </div>
    
    <div className="col-sm-4">
       <button>
       <a href=""><img src={Pic6} alt='Picture6'  style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
     <p><a href=""> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>06</button></a></p>
    </div>
  

  </div>
  </div>
  


 
             
     )   
    }
    }
