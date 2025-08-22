import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {news,productlist} from '../data';
import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
const Section = ({title}) => {
  let sections;
  switch(title){
     case "news":
      sections=[...news];
     break;
     case "products":
      sections=[...productlist]
  }
  return (
    <div className='section_container'>
      <h2 className='section-title'>{title}</h2>

        <Row >
        {sections.slice(0, 4).map((section)=>
        <Col key={section.id} xs={12} lg={3} className='p-2'>
            <Card style={{ width: '100%' }} className='glass-card'>
                <Card.Img variant="top" src={section.img} />
                <Card.Body>
                    <Card.Title>{section.title}</Card.Title>
                    {/* <Card.Text>
                    {section.info}
                    </Card.Text> */}
                     <Link to='/newsdetail' state={{...section}} className='add-btn p-4 neural-btn mt-4 bg-red-500  text-center  py-2 rounded hover:bg-red-600 text-decoration-none  w-100'>Detail</Link>
                    {/* <Button variant="primary" className='neural-btn '>Detail</Button> */}
                </Card.Body>
            </Card>
        </Col>
        )}
        
      </Row>
    </div>
     
  )
}

export default Section