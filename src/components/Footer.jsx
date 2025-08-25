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
             <h3>Dining</h3>
             <Link to="/restaurants">restaurants</Link>
            <Link to="/foodKiosks">food Kiosks</Link>
            <Link to="/specialFoods">Special Diets</Link>
            
            </Col>
            <Col xs={12} md={6} lg={3} className="navgroup">
            <h3>Experiences</h3>
            <Link to="/subscription">Membership</Link>
            <Link to="/news">latest news</Link>
              <Link to="/facilities">Facilities</Link>
              <Link to="/tickets">tickets</Link>
               <Link to="/onlineshop">shop</Link>
              
            </Col>
            <Col xs={12} md={6} lg={3} className="navgroup">
                <h3>Connect</h3>
                <Link to="/job_openings">job openings</Link>
              <Link to="/contact_us">contact us</Link>
             <div class="social-icons">        
               <a href="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
               <a href="https://instagram.com/" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
               <a href="https://x.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
               <a href="https://youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
               <a href="https://tiktok.com/" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
               <a href="https://weixin.com/" target="_blank"><i class="fa-brands fa-weixin"></i></a>
           </div>
           <div>
            <a href="#"><i class="fa-solid fa-phone"></i>:888-8888888</a>
           </div>
           <div>
            <a href="mailto:info@cphk.com"><i class="fa-solid fa-envelope"></i>:info@cphk.com</a>
           </div>
           <div>
            <a href="https://wa.me/6666666"><i class="fa-brands fa-whatsapp"></i>:666-6666666</a>
           </div>

            </Col>
          </Row>
          <div className="pt-3 copyright">&copy; {new Date().getFullYear()}  Cyberpunk Hong Kong</div>
        </Container>
      </footer>

export default Footer