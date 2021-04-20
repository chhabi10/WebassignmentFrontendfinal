import { Component } from "react"
import Register from "./Register";
import {Route} from 'react-router-dom'
import Delete from "./delete";
import About from "./About";
import Home from "./Home";
import './Home.css';
import './Contact.css';
import './About.css';
import './Login.css';
import './Register.css';
import AddCustomer from "./AddCustomer";
import Customer from "./Customer";
import UpdateCustomer from "./UpdateCustomer";
import Login from "./Login";
import Useraccount from "./Useraccount";





class Container extends Component{
    render(){
        return(
          <div >

                        <Route path='/register22' component={Register}/>
                        <Route path='/home' component={Home}/>
                       <Route path='/login'component={Login}/>
                       <Route path='/useraccount' component={Useraccount}/>
                        <Route path='/delete' component={Delete}/>
                        <Route path='/about' component={About}/>
                       <Route path='/addcustomer'component={AddCustomer}/>
                       <Route path='/customer' component={Customer}/>
                       <Route path='/updatecustomer/:id' component={UpdateCustomer}/> 
                       
                       
</div>
                        
                 


        )
    }
}

export default Container;