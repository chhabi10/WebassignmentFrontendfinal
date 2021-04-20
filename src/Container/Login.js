import { Component,state, changeHandler, submitLogin } from "react";
import axios from 'axios';
import React from 'react';
import './Login.css';
import {Redirect} from 'react-router-dom'

class Login extends Component{
    state = {
        username : "",
        password : "",
        chklogin: false
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
           
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http:/ /localhost:90/user/login", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token', response.data.token)
            this.setState({
                chklogin: true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(this.state.chklogin== true){
            //redirect to dashboard
            return <Redirect to='/home'/>
        }
        return(
          
              
                  
            <div className='auth-inner'>
            
               

<h2 className="active"> Sign In </h2>

    <form>

    <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="Username" 
                     name="username" 
                     value={this.state.username} 
                     onChange={(event)=>{this.setState({username:event.target.value})}}/>
                </div>

              

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                     name="password" 
                     value={this.state.password} 
                     onChange={(event)=>{this.setState({password:event.target.value})}}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitLogin} >SignIn</button>
 



</form>

    

    
   <div id="formFooter">
  <a className="underlineHover" href="#">Forgot Password?</a>
</div>


    </div>

    
          
            
           
                
            
            
        )
    }
}
export default Login;