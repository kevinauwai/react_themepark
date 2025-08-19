import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {productlist} from '../../data';
import '../../css/news.css';
const News = () => {
  console.log(productlist);
  return (
    <Container className='news_container'>
      <h1>Park Latest News</h1>
      <p>Stay updated with the newest attractions, special events and exclusive offers to make every visit memorable</p>
      <Row >
        {productlist.map((product)=>
          <Col xs={12} md={6} className='p-2'>
        <Card>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        )}
        
         
      </Row>
    </Container>
    
  )
}

export default News