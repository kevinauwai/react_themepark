import React from "react"
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter,Link,Routes,Route, Navigate } from 'react-router-dom';

const Footer = () => <footer className="bg-dark text-white text-center py-3 ">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3} className="navgroup">
            <h3>Hotel</h3>
             <Link to="/hotel_rooms">hotel rooms</Link>
              {/* <Link to="/hotel_rooms_deluxe">hotel rooms deluxe</Link>
              <Link to="/hotel_rooms_grand">hotel rooms grand</Link>
              <Link to="/hotel_rooms_premier">hotel rooms premier</Link>
              <Link to="/hotel_rooms_standard">hotel rooms standard</Link> */}
              <Link to="/hotel_dining">hotel dining</Link>
              <Link to="/hotel_facilities">hotel facilities</Link>
              <Link to="/hotel_booking">hotel booking</Link>
              <Link to="/job_openings">job_openings</Link>
              <Link to="/contact_us">contact_us</Link>
            </Col>
            <Col xs={12} md={6} lg={3} className="navgroup">
             <h3>restaurants</h3>
             <Link to="/restaurants">restaurants</Link>
            <Link to="/restaurant_Booking">restaurant_Booking</Link>
            <Link to="/foodKiosks">foodKiosks</Link>
            <Link to="/specialFoods">specialFoods</Link>
            <Link to="/specialFoods_Request">specialFoods_Request</Link>
            <Link to="/subscription">subscription</Link>
            <Link to="/subscription_Form">subscription_Form</Link>
            <Link to="/login">login</Link>
            </Col>
            <Col xs={12} md={6} lg={3} className="navgroup">
            <h3>Others</h3>
             <Link to="/onlineshop">shop</Link>
              {/* <Link to="/cart">cart</Link>
              <Link to="/product">product</Link>
              <Link to="/productDetail">productDetail</Link> */}
              <Link to="/news">news</Link>
              {/* <Link to="/newsdetail">newsdetail</Link> */}
              <Link to="/facilities">facilities</Link>
              {/* <Link to="/facilitiesRobots">facilitiesRobots</Link> */}
              <Link to="/tickets">tickets</Link>
            </Col>
            <Col xs={12} md={6} lg={3} className="navgroup">
              <Link to="">Privacy Policy</Link>
              <Link to="">Legal Terms</Link>
              <Link to="">Terms of use</Link>
              <Link to="">Park Rules</Link>
              <Link to="">Hotel Rules</Link>
            </Col>
          </Row>
          {/* <ul className="pt-3">
            <li><a href="#">Privacy Policy</a></li>
            <li>Legal Terms</li>
            <li>Terms of use</li>
            <li>Park Rules</li>
            <li>Hotel Rules</li>
          </ul> */}
          <div className="pt-3 copyright">&copy; {new Date().getFullYear()} erb project group</div>
        </Container>
      </footer>

export default Footer