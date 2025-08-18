import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {secitonitems} from '../data';
import { Container } from 'react-bootstrap';
const Section = ({title}) => {
  return (
    <div className='section_container'>
      <h2 className='section-title'>{title}</h2>

        <Row>
        {secitonitems.map((section)=>
        <Col key={section.id} xs={12} lg={3}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={section.img} />
                <Card.Body>
                    <Card.Title>{section.title}</Card.Title>
                    <Card.Text>
                    {section.info}
                    </Card.Text>
                    <Button variant="primary" className='neural-btn '>{section.price}</Button>
                </Card.Body>
            </Card>
        </Col>
        )}
        
      </Row>
    </div>
     
  )
}

export default Section