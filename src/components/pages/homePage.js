import React, { Component } from 'react';
import { Link,useHistory } from 'react-router-dom'
//component
import Header from '../headerComponent/header';



function LearnMoreButton(){

  let history=useHistory();
  function handleClick(){
    history.push("/LearnMore");
  }
}

class Homepage extends Component {
  render() {
    return (

      <div className="home-page-bg">
    
      <section className="home-page">
      <div className="home-wrapper">
        <div className="title">
        WPHEngineering
        </div>
        <div className="button-block">
          <Link to="/LearnMore" className="button-3">Learn More</Link>
          <Link to="/Portfolio" className="button-3">Portfolio</Link>
          <Link to="/ContactUs" className="button-3">Contact Us</Link>
        </div>
      </div>
      </section>
      </div>



    );
  }
}

export default Homepage;
