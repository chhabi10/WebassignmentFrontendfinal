import axios from "axios";
import { Component } from "react";


class UpdateCustomer extends Component{
    state={
        fname:"",
        lname:"",
        identity:"",
        dob:"",
        address:"",
        id:this.props.match.params.id  //url ko id taneko 
    }
    changeHandler = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        })

    }
    componentDidMount(){
        axios.get('http://localhost:90/customer/one/' +this.state.id) 
        .then((message)=>{
            this.setState({
                fname:message.data.fname,
                lname:message.data.lname,
                identity:message.data.identity,
                dob:message.data.dob,
                address:message.data.address
            })
        })
        .catch((err)=>{
            console.log(err.message)
        })


    }
    updateCustomer = (e) => {

        const data = {

            id: this.props.match.params.id,

            fname: this.state.fname,

            lname: this.state.lname,

            identity: this.state.identity,

            dob: this.state.dob,
            address:this.state.address



        }

        e.preventDefault();

        axios.put('http://localhost:90/customer/update', data)

            .then((response) => {

                console.log(response)

                this.setState({ fname: "",

                lname: "",

                identity: "",

                dob: "",
            address:""})



                // toast(response.data.message)

            })

            .catch((err) => {

                console.log(err.response)

            })
        

    }
    render(){
        return(
            <div className="auth-wrapper">
                <form>
                <p>
                        Firstname
                        <input type="text" name="fname" value={this.state.fname}
                        onChange={this.changeHandler}/>

                    </p>
                     
                    <p>
                        Lastname
                        <input type="text" name="lname" value={this.state.lname}
                         onChange={this.changeHandler}
                         />

                    </p>

                    <p>
                    Identity
                        <input type="text" name="identity" value={this.state.identity}
                         onChange={this.changeHandler}
                         />

                    </p>
                    
                    <p>
                    DateofBirth
                        <input type="text" name="dob" value={this.state.dob}
                         onChange={this.changeHandler}
                         />

                    </p>
                    <p>
                    Address
                        <input type="text" name="address" value={this.state.address}
                         onChange={this.changeHandler}
                         />

                    </p>
                    <button type="submit" className="btn btn-primary btn-block" onClick={this.updateCustomer} >Update</button>
                      
                   
                    

                    
                </form>
            </div>
        )
    }
}
export default UpdateCustomer