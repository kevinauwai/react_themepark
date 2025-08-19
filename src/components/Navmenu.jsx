import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/NavLink';
import { BrowserRouter,Link,Routes,Route,Navigate, useNavigate} from 'react-router-dom'

import '../data';
import { navlist } from '../data';
import {useDispatch,useSelector} from 'react-redux';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
function Navmenu() {
  const count=useSelector((state)=>state.reducer.itemList.length);
  const navigate=useNavigate();
  const [expanded, setExpanded] = useState(false);
      const handleToggle = () => {
        setExpanded(!expanded);
      };
  return (
    <Navbar expand="lg" expanded={expanded} onToggle={handleToggle} className="home_header" sticky='top' >
      <Container>
        <Navbar.Brand href="#" >
          <img src='../img/home/logo_removebg.png' width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navlist.map((navitem)=>
            <Link  key={navitem.id} className="nav-link" onClick={handleToggle} to={navitem.link} >{navitem.text}</Link>
            )}
            
            
            {/* <NavDropdown className='clearposition' title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="ml-auto login"> {/* 'ml-auto' for right-aligned items */}
           {/* <div className="position-relative">
  
    <i className="bi bi-cart fs-3"  onClick={()=>navigate('/cart')}></i> 


  <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
    {count}
     <span className="visually-hidden">items in cart</span>
  </span>
</div> */}
           
          <Link className="nav-link">Login</Link>
        </Nav>
        </Navbar.Collapse>
        <div className="position-relative-cart">
              <i className="bi bi-cart fs-3"  onClick={()=>navigate('/cart')}></i> 
            <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
              {count}
              <span className="visually-hidden">items in cart</span>
            </span>
          </div>
      </Container>
    </Navbar>
    
    
  );
}

export default Navmenu;