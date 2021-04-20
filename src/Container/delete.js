import { Component } from "react";
import axios from'axios'

class Delete extends Component{

    state={
        fname:"",
        lname:"",
        identity:"",
        dob:"",
        address:"",
        id:this.props.match.params.id  //url ko id taneko 
    }
    componentDidMount()
    {
        axios.get('http://localhost:90/customer/delete' + this.state.id)
        .then((response)=>{
           this.setState({
            fname:this.state.fname,
            lname:this.state.lname,
           identity:this.state.identity,
            dob:this.state.dob,
            address:this.state.address
         
           })
    
        })
        .catch((err)=>{
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
                        OnChange={this.change}/>

                    </p>
                     
                    <p>
                        Lastname
                        <input type="text" name="lname" value={this.state.lname}
                         OnChange={this.change}
                         />

                    </p>

                    <p>
                    Identity
                        <input type="text" name="identity" value={this.state.identity}
                         OnChange={this.change}
                         />

                    </p>
                    
                    <p>
                    DateofBirth
                        <input type="text" name="dob" value={this.state.dob}
                         OnChange={this.change}
                         />

                    </p>
                    <p>
                    Address
                        <input type="text" name="address" value={this.state.address}
                         OnChange={this.change}
                        />
                        </p>

            
                   
                </form>
            </div>
        )
    }
}
export default Delete;