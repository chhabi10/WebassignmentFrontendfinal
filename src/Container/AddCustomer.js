import { Link } from "react-router-dom"
import axios from 'axios'

import { Component } from "react";

class AddCustomer extends Component{
state= {
    fname:'',
    lname:'',
    identity:'',
    dob:'',
    address:''

}
change=(e)=>{
this.setState({
    [e.target.name]: e.target.value
})
}

addcustomer=(e)=>{
    e.preventDefault();// prevent s reloading page
    axios.post('http://localhost:90/add/customer', this.state)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
    render(){
        return(
            <div className='auth-inner'>
                <form>
                    
                
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" 
                    name="fname" 
                    value={this.state.fname} 
                    onChange={(event)=>{this.setState({fname:event.target.value})}} />
                 

                    
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                     name="lname" 
                     value={this.state.lname} 
                     onChange={(event)=>{this.setState({lname:event.target.value})}}/>
                
               
                    <label>Identity number</label>
                    <input type="text" className="form-control" placeholder="Identity number" 
                     name="identity" 
                     value={this.state.identity} 
                     onChange={(event)=>{this.setState({identity:event.target.value})}}/>
                
               
                    <label> DateofBirth</label>
                    <input type="text" className="form-control" placeholder="date of birth" 
                     name="dob" 
                     value={this.state.dob} 
                     onChange={(event)=>{this.setState({dob:event.target.value})}}/>
                
               
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" 
                     name="address" 
                     value={this.state.address} 
                     onChange={(event)=>{this.setState({address:event.target.value})}}/>
              


                    
                      
               <p>
                      
          <button type="submit" onClick={this.addcustomer}>Submit</button>
          </p>
         </form>
            </div>
        )
    }

}
export default AddCustomer;
