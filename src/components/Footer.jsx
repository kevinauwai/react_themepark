import React from "react"
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => <footer className="bg-dark text-white text-center py-3 ">
        <Container>
          <ul className="pt-3">
            <li>Privacy Policy</li>
            <li>Legal Terms</li>
            <li>Terms of use</li>
            <li>Park Rules</li>
            <li>Hotel Rules</li>
          </ul>
          <div className="pt-3 copyright">&copy; {new Date().getFullYear()} erb project group</div>
        </Container>
      </footer>

export default Footer