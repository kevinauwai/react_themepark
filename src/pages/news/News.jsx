import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BrowserRouter,Link,Routes,Route, Navigate } from 'react-router-dom';
import {news} from '../../data';
import '../../css/news.css';
const News = () => {
  console.log(news);
  return (
    <Container className='news_container'>
      <h1 className='card-title'>Park Latest News</h1>
      <p>Stay updated with the newest attractions, special events and exclusive offers to make every visit memorable</p>
      <Row >
        {news.map((newitem)=>
          <Col key={newitem.id} xs={12} md={6} lg={4} className='p-2'>
        <Card>
          <Card.Img variant="top" src={newitem.img} />
          <Card.Body>
            <Card.Title className='card-title-ellipsis'>{newitem.title}</Card.Title>
            <Card.Text>
              {newitem.description}
            </Card.Text>
            <Link to='/newsdetail' state={{...newitem}} className='add-btn p-4 neural-btn mt-4 bg-red-500  text-center  py-2 rounded hover:bg-red-600 text-decoration-none  w-100'>Details</Link>
            {/* <Button variant="primary" onClick={()}>Detail</Button> */}
          </Card.Body>
        </Card>
        </Col>
        )}
        
         
      </Row>
    </Container>
    
  )
}

export default News