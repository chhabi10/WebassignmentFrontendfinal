import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
  render() {
    return (
//       <nav classname="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
//   <div classname="container">
//     <a classname="navbar-brand" href="index.html">Transferfund</a>
//     <button classname="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//       Menu
//       <i classname="fas fa-bars" />
//     </button>
//     <div classname="collapse navbar-collapse" id="navbarResponsive">
//       <ul classname="navbar-nav ml-auto">
//         <li classname="nav-item">
//           <a classname="nav-link" href="/home">Home</a>
//         </li>
//         <li classname="nav-item">
//           <a classname="nav-link" href="/about">About</a>
//         </li>
//         <li classname="nav-item">
//           <a classname="nav-link" href="/register22">Register</a>
//         </li>
//         <li classname="nav-item">
//           <a className="nav-link" href="/login">login</a>
//         </li>
//         <li classname="nav-item">
//           <a className="nav-link" href="/addcustomer">AddCustomer</a>
//         </li>
//         <li classname="nav-item">
//           <a className="nav-link" href="/customer">Customer</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>




  
      
     
      //  <nav class="navbar navbar-expand-lg navbar-light bg-success fixed-top" id="mainNav">
      //   <div class="container">
      //     <a class="navbar-brand" href="#">Fund transfer</a>
        
      // <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      //   <span class="navbar-toggler-icon"></span>
      // </button>
      // <div class="collapse navbar-collapse" id="navbarResponsive">
      //   <ul class="navbar-nav ml-auto">
      //     <li class="nav-item active">
      //       <a class="nav-link" href="/home">Home
      //         <span class="sr-only">(current)</span>
      //       </a>
      //     </li>
      //         <li class="nav-item">
      //           <a class="nav-link" href="/about">About</a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link" href="/contact">Contact</a>
      //         </li>
              // <li class="nav-item">
              //   <a class="nav-link" href="/register22">Register</a>
              // </li>
              // <li class="nav-item">
              //   <Link class="nav-link" to="/login">Login</Link>
              // </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>



      
   <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">Transfer Fund</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="/register22">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">login</a>
        </li>
        
        <li classname="nav-item">     
           <a className="nav-link" href="/addcustomer">AddCustomer</a>
       </li>
       <li classname="nav-item">
           <a className="nav-link" href="/customer">Customer</a>
       </li>
       
      </ul>
    </div>
  </div>
</nav>



/* <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Log In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register22">Register</a>
        </li>
        <li className="nav-item">
          <link className="nav-link" href="/login" />Login
        </li>
        </ul>
    </div>
  </div>
</nav> */


      
     


        )
    }
}



export default Header;