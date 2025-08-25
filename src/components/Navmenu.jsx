import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavLink from "react-bootstrap/NavLink";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "../data";
import { navlist,navlist_sub } from "../data";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
function Navmenu() {
  const totalquantity = useSelector((state) => state.reducer.totalQuantity);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={handleToggle}
      className="home_header"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#">
          <Link key="home" to="/">
          <img src="../img/home/logo_removebg.png" width={100} />
          </Link>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navlist.map((navitem) => 
              navitem.submenuid==0?(
              <Link
                key={navitem.id}
                className="nav-link"
                onClick={handleToggle}
                to={navitem.link}
              >
                {navitem.text}
              </Link>
              
            ):(<NavDropdown className="clearposition" key={navitem.id} title={navitem.text} id="basic-nav-dropdown">
              {navlist_sub.filter((subitem)=>subitem.pid==navitem.id).map((subitem)=>
              <NavDropdown.Item  key={subitem.id} onClick={()=>navigate(subitem.link)}>
              {subitem.text}
              </NavDropdown.Item>
              
            )}
            </NavDropdown>)
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
          <Nav className="ml-auto ">
            {" "}
            {/* 'ml-auto' for right-aligned items */}
            {/* <div className="position-relative">
              <i className="bi bi-cart fs-3"  onClick={()=>navigate('/cart')}></i> 
            <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
              {count}
              <span className="visually-hidden">items in cart</span>
            </span>
          </div> */}
            <Link to="/login" className="nav-link">Login</Link>
          </Nav>
        </Navbar.Collapse>
        <div className="position-relative-cart">
          <i className="bi bi-cart fs-3" onClick={() => navigate("/cart")}></i>
          <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
            {totalquantity}
            <span className="visually-hidden">items in cart</span>
          </span>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navmenu;
