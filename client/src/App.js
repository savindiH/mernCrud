import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import Picture from './components/Picture';
import Footer from './components/Footer';
import New from './components/New';




export default class App extends Component{
    render(){
        return(
           
            <BrowserRouter>
          
             <div className="container">
                 <NavBar/>







                 <Route path="/" exact component ={Home}></Route>
                 <Route path="/new" exact component ={New}></Route>
                 
                 <Route path="/add" component ={CreatePost}></Route>
                 <Route path="/edit/:id" component ={EditPost}></Route>
                 <Route path="/post/:id" component ={PostDetails}></Route>
                 <Route path="/picutes" component ={Picture}></Route>



                
                
            </div>
            </BrowserRouter>
            
           
        )
    }
}