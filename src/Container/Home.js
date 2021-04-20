import { Component } from "react"
import React from 'react';
import './Home.css';



class Home extends Component{
    render(){
        return(
     
<div>
 


  <header className="masthead" >
    <div style={{backgroundImage: 'url("img/home-bg.jpg")'
  
}}>

   
  <div className="overlay" />
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <div className="site-heading">
          <h1>Transfer Fund</h1>
          <span className="subheading">Help by transfering easily</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  
</header>


<div>
  
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 order-lg-2">
        <div className="p-5">
          <img className="img-fluid rounded-circle" src="img/img1.jpg" alt />
        </div>
      </div>
      <div className="col-lg-6 order-lg-1">
        <div className="p-5">
          <h2 className="display-4">For those who wants to help</h2>
          <p>Trasfer fund will helps them to donate the amount of money for the needy people </p>
        </div>
      </div>
    </div>
  </div>

  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src="img/img2.jpg" alt />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-5">
            <h2 className="display-4">We Salute you!</h2>
            <p>Helping other people who are  affected by natural disaster, disease.this application will help them to get fund from people.So,
              Those people who want to help them we salute yyou for your kindness. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>



       

    
  


  </div>






   

)
}

}
       
    
export default Home;