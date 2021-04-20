import { Component } from "react";
import axios from 'axios'

class Register extends Component{

    state={
        fname:"",
        lname:"",
        
        username:"",
    
        password:""

    }

    register=(err)=>{
        err.preventDefault()
        const userData={
            fname:this.state.fname,
            lname:this.state.lname,
           
            username:this.state.username,
         
            password:this.state.password
        }
        axios.post("http://localhost:90/user/register",userData)
        .then(res=>{
            console.log(res)
           
        })
        .catch(err=>{
            console.log(err)
        })

    }
    render(){
        return(
            <div className='auth-wrapper'>
            
           
                <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" 
                    name="fname" 
                    value={this.state.fname} 
                    onChange={(event)=>{this.setState({fname:event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                     name="lname" 
                     value={this.state.lname} 
                     onChange={(event)=>{this.setState({lname:event.target.value})}}/>
                </div>

               

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

                <button type="submit" className="btn btn-primary btn-block" onClick={this.register} >Signup</button>
                
            </form>
            </div>
         
           
        
        )
    }
}
export default Register


