
import axios from "axios";
import { Link } from 'react-router-dom';
import { Component } from "react";


class Customer extends Component {


    state = {
        Customer: []
    }
    componentDidMount() {
        axios.get("http://localhost:90/show/all")
            .then((alldata) => {
                console.log(alldata)
                this.setState({
                    Customer: alldata.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })

    }

    Deletecustomer = (customerId) => {
        axios.delete('http://localhost:90/customer/delete/' + customerId)
            .then((message) => {
                console.log(message)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    render() {
        return(
            <div className="container-fluid">
            <div className="row">
                {
                    this.state.Customer.map((customer)=>{
                        return(
                            <div className="auth-wrapper" style={{ width: '30rem' }}>
                 <div className="col-md-3">            
                            <div className="card" style={{ width: '18rem' }}>
                             <div className="card-body">
                                 <h5 className="card-title">{customer.fname}</h5>
                                 <p><h6 className="card-title">{customer.lname}</h6></p>
                               <p>  <h7 className="card-title">{customer.identity}</h7></p>
                                <p> <h8 className="card-title">{customer.dob}</h8></p>
                                <p> <h9 className="card-title">{customer.address}</h9></p>
                             <p> <a href="/useraccount" type="submit" className="btn btn-primary btn-block" >Donate</a></p>
                             <p><Link to={"/updatecustomer/" + customer._id}>Update</Link></p>
                             <p><button onClick={this.Deletecustomer.bind(this,customer._id)}>Delete</button></p>  
                
                             </div>
                         </div>
                         </div>
                            </div>
            
            
                          

                        )
                       
                    })
                }
            </div>
        </div>
        )
       
     
    }

}
export default Customer;