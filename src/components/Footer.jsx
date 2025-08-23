import React from "react"
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter,Link,Routes,Route, Navigate } from 'react-router-dom';

const Footer = () => <footer className="bg-dark text-white text-center py-3 ">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3} className="navgroup">
            <h3>Hotel</h3>
             <Link to="/hotel_rooms">hotel rooms</Link>
              <Link to="/hotel_dining">hotel dining</Link>
              <Link to="/hotel_facilities">hotel facilities</Link>
              <Link to="/hotel_booking">hotel booking</Link>
              
            </Col>
            <Col xs={12} md={6} lg={3} className="navgroup">
             <h3>restaurants</h3>
             <Link to="/restaurants">restaurants</Link>
            {/* <Link to="/restaurant_Booking">restaurant_Booking</Link> */}
            <Link to="/foodKiosks">foodKiosks</Link>
            <Link to="/specialFoods">specialFoods</Link>
            {/* <Link to="/specialFoods_Request">specialFoods_Request</Link> */}
            <Link to="/subscription">subscription</Link>
            {/* <Link to="/subscription_Form">subscription_Form</Link> */}
            
            </Col>
            <Col xs={12} md={6} lg={3} className="navgroup">
            <h3>Others</h3>
             <Link to="/onlineshop">shop</Link>
              <Link to="/news">latest news</Link>
              <Link to="/facilities">facilities</Link>
              <Link to="/tickets">tickets</Link>
              <Link to="/job_openings">job openings</Link>
              <Link to="/contact_us">contact us</Link>
            </Col>
            <Col xs={12} md={6} lg={3} className="navgroup">
                <h3>Connect</h3>
             <div class="social-icons">        
               
               <a href="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
               <a href="https://instagram.com/" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
               <a href="https://x.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
               <a href="https://youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
               <a href="https://tiktok.com/" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
               <a href="https://weixin.com/" target="_blank"><i class="fa-brands fa-weixin"></i></a>
           </div>
           <p>
            <a href="#"><i class="fa-solid fa-phone"></i>:888-8888888</a>
           </p>
           <p>
            <a href="mailto:info@cphk.com"><i class="fa-solid fa-envelope"></i>:info@cphk.com</a>
           </p>
           <p>
            <a href="https://wa.me/6666666"><i class="fa-brands fa-whatsapp"></i>:666-6666666</a>
           </p>

            </Col>
          </Row>
          <div className="pt-3 copyright">&copy; {new Date().getFullYear()} syber punk project group</div>
        </Container>
      </footer>

export default Footer