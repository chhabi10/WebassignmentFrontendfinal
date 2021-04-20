import { Component } from "react";
import axios from 'axios'

class Useraccount extends Component{

    state={
        Accountname:"",
        Accountnumber:"",
        
        amount:"",
    
        remarks:""

    }
    useraccount=(err)=>{
        err.preventDefault()
        const userData={
            Accountname:this.state.Accountname,
            Accountnumber:this.state.Accountnumber,
           
            amount:this.state.amount,
         
            remarks:this.state.remarks
        }
        axios.post("http://localhost:90/add/useraccount",userData)
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
        <h3>Send Fund</h3>

        <div className="form-group">
            <label>AccountName</label>
            <input type="text" className="form-control" placeholder="Enter Accountname" 
             name="Accountname" 
             value={this.state.Accountname} 
             onChange={(event)=>{this.setState({Accountname:event.target.value})}}/>
        </div>

        <div className="form-group">
            <label>AccountNumber</label>
            <input type="number" className="form-control" placeholder="Enter Accountnumber" 
             name="Accountnumber" 
             value={this.state.Accountnumber} 
             onChange={(event)=>{this.setState({Accountnumber:event.target.value})}}/>
        </div>

       

        <div className="form-group">
            <label>Amount</label>
            <input type="number" className="form-control" placeholder="Enter Amount" 
             name="amount" 
             value={this.state.amount} 
             onChange={(event)=>{this.setState({amount:event.target.value})}}/>
        </div>

      

        <div className="form-group">
            <label>Remarks</label>
            <input type="text" className="form-control" placeholder="Enter remarks" 
             name="remarks" 
             value={this.state.remarks} 
             onChange={(event)=>{this.setState({remarks:event.target.value})}}/>
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={this.useraccount} >Send</button>
        
    </form>
    </div>
 

        )
    }
}

export default Useraccount;