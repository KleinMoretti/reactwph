import React, { Component } from 'react';
/*import {NavBarItems} from './NavBarItems'*/

import logo from './23.png';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <header >


         <Navbar className="navbar-custom sticky-nav" sticky="top"
      expand="lg" >
          <Col>
         <Navbar.Brand className="navbar-custom-text" href="/reactwph/#/">
           <img
             alt="Logo"
             src={logo}
             width="62"
             height="62"

           />{' '}
          WPH
          </Navbar.Brand>
          </Col>
          <Col>
          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mx-auto left">
             <Nav.Link className="mr-sm-2" href="reactwph/#/LearnMore">Learn More</Nav.Link>
             <Nav.Link className="mr-sm-2" href="#/Portfolio">Portfolio</Nav.Link>
             <Nav.Link className="mr-sm-2" href="/ContactUs">Contact Us</Nav.Link>
             </Nav>
             </Navbar.Collapse>
             </Col>
             <Col className="text-right">
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Col>
         </Navbar>









      </header>


    );
  }
}

export default Header;
/*<h1 className="logo">
   WPH
</h1>
<div className="menu-icon"></div>
*/
/*<nav >
   <ul>
      {NavBarItems.map((item,index)=>{
      <li key={index}>
         <a className={item.cName} href={item.url}></a>
         {item.title}
      </li>
      })}
   </ul>
</nav>*/
